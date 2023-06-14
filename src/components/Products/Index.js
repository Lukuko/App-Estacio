import { FlatList, View  } from "react-native";
import { Produtos,ProdutosInfo, ProdutosHeader,ProdutosDescription,ProdutosFooter,ProdutosStatus,ProdutosIcon,ProdutosAction, ProdutosImage, ProdutosStatusIcon} from "./Style";
import { Text, } from "../Text";

import person from '../../assets/images/pessoa.png';
import disponible from '../../assets/images/disponivel.png';

import { productData } from '../../mocks/Products';


export default function ProdutosScreen(){
  return(
    <View>
      <FlatList 
      initialNumToRender={1000}
      windowSize={21}
      data={productData}
      keyExtractor={(items) => items._equipment_cod.toString()}
      renderItem={({item}) => (
        <Produtos>
        <ProdutosImage/>
        <ProdutosInfo>
          <ProdutosHeader>
            <Text weight="600" size={15} >{item.name}</Text>
            </ProdutosHeader>
          <ProdutosDescription>
            <Text size={15}>{item._equipment_cod}</Text>
            <Text size={15}>{item.description}</Text>
            <Text size={15} color="#2528be">{item.disponibleStatus === false ? null : item.acquisition_time}</Text>
            <ProdutosFooter>
            <ProdutosAction>
              <ProdutosStatus>
               
               <Text size={15} color={item.disponible ? '#009900' : '#2596be'}>
               <ProdutosStatusIcon source={item.disponible ? disponible : person}/>{item.disponible ? item.disponibleStatus : item.registration}</Text> 
              </ProdutosStatus>
            </ProdutosAction>
            </ProdutosFooter>
            </ProdutosDescription>
        </ProdutosInfo>  
      </Produtos>
    
      )}/>
    </View> 
  )
}