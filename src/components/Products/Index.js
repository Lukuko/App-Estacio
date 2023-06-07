import { Alert, FlatList,TouchableOpacity,View } from "react-native";
import { Produtos,ProdutosHeader, ProdutosDescription,ProdutosFooter,ProdutosStatus,ProdutosIcon,ProdutosAction, ProdutosImage } from "./Style";
import { Text } from "../Text";


import pending from '../../assets/images/pending.png';
import done from '../../assets/images/done.png';
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
        <ProdutosHeader>
          <Text size={18} weight="600">Monitor DELL</Text>
        </ProdutosHeader>
        {/*Header do card de equipamento(no final trocar o nome de tudo!*/}
        <ProdutosDescription>
          <ProdutosImage/>
          <Text>Código do equipamento: 1</Text>
          <Text>Descrição: Monitor da marca Dell</Text>
        </ProdutosDescription>
        <ProdutosFooter>
          <ProdutosStatus>
            <ProdutosIcon source={done}/>
            <Text  color="#2192D8">Disponível</Text>
          </ProdutosStatus>
          <TouchableOpacity>

          <ProdutosIcon source={edit} />

          </TouchableOpacity>
          <TouchableOpacity>

          <ProdutosIcon source={excluir} />

          </TouchableOpacity>
        </ProdutosFooter>
      </Produtos>
      <Produtos>
        <ProdutosHeader>
          <Text size={18} weight="600">Teclado DELL</Text>
        </ProdutosHeader>
        {/*Header do card de equipamento(no final trocar o nome de tudo!*/}
        <ProdutosDescription>
        <ProdutosImage/>
          <Text>Código do equipamento: 2</Text>
          <Text>Descrição: Teclado da marca Dell</Text>
        </ProdutosDescription>
        <ProdutosFooter>
          <ProdutosStatus>
            <ProdutosIcon source={done}/>
            <Text  color="#2192D8">Disponível</Text>
          </ProdutosStatus>
          <TouchableOpacity>

          <ProdutosIcon source={edit} />

          </TouchableOpacity>
          <TouchableOpacity>

          <ProdutosIcon source={excluir} />

          </TouchableOpacity>
        </ProdutosFooter>
      </Produtos>
      
    </View> 
  )
}