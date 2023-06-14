import { FlatList, View  } from "react-native";
import { Card,CardInfo, CardHeader,CardDescription,CardFooter,CardStatus,CardAction, CardImage, CardStatusIcon,ViewTitle} from "./Style";
import { Text, } from "../Text";

import person from '../../assets/images/pessoa.png';
import disponible from '../../assets/images/disponivel.png';

import { productData } from '../../mocks/Products';


export default function ProdutosScreen(){
  const sortedData = productData.sort((a, b) => {
    return new Date(b.acquisition_date) - new Date(a.acquisition_date);
  });
  return(
    <View>
      <ViewTitle>Últimos Equipamentos Reservados</ViewTitle>
      <FlatList 
      initialNumToRender={1000}
      windowSize={21}
      data={sortedData.filter(item => item.disponibleStatus !== "Disponível")}
      keyExtractor={(items) => items._equipment_cod.toString()}
      renderItem={({item}) => (
        <Card>
        <CardImage  source={item.image}/>
        <CardInfo>
          <CardHeader>
            <Text weight="600" size={14} >{item.name}</Text>
            </CardHeader>
          <CardDescription>
            <Text size={15}>{item._equipment_cod}</Text>
            <Text size={15}>{item.description}</Text>
            <Text size={15} color="#2528be">{item.disponibleStatus === false ? null : item.acquisition_time}</Text>
            <CardFooter>
            <CardAction>
              <CardStatus>
               
               <Text size={15} color={item.disponible ? '#009900' : '#2596be'}>
               <CardStatusIcon source={item.disponible ? disponible : person}/>{item.disponible ? item.disponibleStatus : item.registration}</Text> 
              </CardStatus>
            </CardAction>
            </CardFooter>
            </CardDescription>
        </CardInfo>  
      </Card>
    
      )}/>
    </View> 
  )
}