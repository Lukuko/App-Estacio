import loupe from '../../assets/images/loupe.png';
import { Container, SearchIcon, StyledTextInput } from './Style';
import { useState } from 'react';
import { Text } from '../Text';
import { Modal, View, FlatList,TouchableOpacity } from 'react-native';
import { productData } from '../../mocks/Products';
import { Card,CardInfo, CardHeader,CardDescription,CardFooter,CardStatus,CardAction, CardImage, CardStatusIcon} from "../Products/Style";
import disponible from '../../assets/images/disponivel.png';
import person from '../../assets/images/pessoa.png';
import Header from "../Header/Index";
export default function SearchBar({ onPress }) {
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const handleInputChange = (text) => {
    setSearchText(text);
  };
  const handleSearch = () => {
    const results = productData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
    setShowResults(true);
  };
  const handleCloseModal = () => {
    setShowResults(false);
    setSearchText('');
  };
  const handleEnterPress = () => {
    handleSearch();
  };
  console.log(searchResults);
    return (
      <Container>
        <StyledTextInput 
        onPress={onPress} 
        placeholder="Pesquise o Equipamento desejado" 
        onChangeText={handleInputChange} 
        value={searchText}
        onSubmitEditing={handleEnterPress}/>
        <TouchableOpacity onPress={handleSearch}>
          <SearchIcon source={loupe} />
        </TouchableOpacity>
        <Modal visible={showResults} onRequestClose={handleCloseModal}>
        <Header />
          <View>
            <FlatList
              initialNumToRender={10}
              windowSize={21}
              data={searchResults}
              keyExtractor={(item) => item._equipment_cod.toString()}
              renderItem={({ item }) => (
                <Card>
                  <CardImage source={item.image} />
                  <CardInfo>
                    <CardHeader>
                      <Text weight="600" size={15}>{item.name}</Text>
                    </CardHeader>
                    <CardDescription>
                      <Text size={15}>{item._equipment_cod}</Text>
                      <Text size={15}>{item.description}</Text>
                      <Text size={15} color="#2528be">
                        {item.disponibleStatus === false ? null : item.acquisition_time}
                      </Text>
                      <CardFooter>
                        <CardAction>
                          <CardStatus>
                            <Text size={15} color={item.disponible ? '#009900' : '#2596be'}>
                              <CardStatusIcon source={item.disponible ? disponible : person} />
                              {item.disponible ? item.disponibleStatus : item.registration}
                            </Text>
                          </CardStatus>
                        </CardAction>
                      </CardFooter>
                    </CardDescription>
                  </CardInfo>
                </Card>
              )}
            />
          </View>
      </Modal>
      </Container>
    );
  }