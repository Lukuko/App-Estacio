import { Alert, FlatList,TouchableOpacity, View } from "react-native";
import { Produtos,ProdutosInfo, ProdutosHeader,ProdutosDescription,ProdutosFooter,ProdutosStatus,ProdutosIcon,ProdutosAction, ProdutosImage, ProdutosActionIcons } from "./Style";
import { Text, } from "../Text";



import excluir from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';

import { produtos } from "../../mocks/Products";
import SearchBar from "../SearchBar/Index";
Products = produtos
export default function ProdutosScreen(Products){
  return(
    <View>
      <SearchBar/>
      <Produtos>
        <ProdutosImage/>
        <ProdutosInfo>
          <ProdutosHeader>
            <Text weight="600" >Título</Text>
            </ProdutosHeader>
          <ProdutosDescription>
            <Text size={15}>Código</Text>
            <Text size={15}>Descrição Resumida</Text>
            <ProdutosFooter>
            <ProdutosAction>
              <ProdutosStatus>
               <Text size={15} color={'#009900'}>Disponibilidade</Text> 
              </ProdutosStatus>
              <ProdutosActionIcons>
                <TouchableOpacity>
                  <ProdutosIcon source={edit}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ProdutosIcon source={excluir}/> 
                </TouchableOpacity>
              </ProdutosActionIcons>
            </ProdutosAction>
            </ProdutosFooter>
            </ProdutosDescription>
            
        </ProdutosInfo>  
      </Produtos>
    
    </View> 
  )
}