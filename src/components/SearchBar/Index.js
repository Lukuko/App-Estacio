import loupe from '../../assets/images/loupe.png';
import { Container, SearchIcon, StyledTextInput } from './Style';
import { useState } from 'react';
import { Text } from '../Text';
import { Modal, View, FlatList,TouchableOpacity } from 'react-native';
import { productData } from '../../mocks/Products';
import { Produtos,ProdutosInfo, ProdutosHeader,ProdutosDescription,ProdutosFooter,ProdutosStatus,ProdutosAction, ProdutosImage, ProdutosStatusIcon} from "../Products/Style";
import disponible from '../../assets/images/disponivel.png';
import person from '../../assets/images/pessoa.png';
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
          <View>
            <FlatList
              initialNumToRender={1000}
              windowSize={21}
              data={searchResults} // Substitua 'productData' por 'searchResults'
              keyExtractor={(item) => item._equipment_cod.toString()}
              renderItem={({ item }) => (
                <Produtos>
                  <ProdutosImage />
                  <ProdutosInfo>
                    <ProdutosHeader>
                      <Text weight="600" size={15}>{item.name}</Text>
                    </ProdutosHeader>
                    <ProdutosDescription>
                      <Text size={15}>{item._equipment_cod}</Text>
                      <Text size={15}>{item.description}</Text>
                      <Text size={15} color="#2528be">
                        {item.disponibleStatus === false ? null : item.acquisition_time}
                      </Text>
                      <ProdutosFooter>
                        <ProdutosAction>
                          <ProdutosStatus>
                            <Text size={15} color={item.disponible ? '#009900' : '#2596be'}>
                              <ProdutosStatusIcon source={item.disponible ? disponible : person} />
                              {item.disponible ? item.disponibleStatus : item.registration}
                            </Text>
                          </ProdutosStatus>
                        </ProdutosAction>
                      </ProdutosFooter>
                    </ProdutosDescription>
                  </ProdutosInfo>
                </Produtos>
              )}
            />
          </View>
      </Modal>
      </Container>
    );
  }