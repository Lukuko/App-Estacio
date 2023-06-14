import AddButton from "../components/AddButton/Index"
import Header from "../components/Header/Index";
import ProdutosScreen from "../components/Products/Index";
import { StatusBar } from "expo-status-bar";
import { Container } from "./Style";
import CustomModal from '../components/CustomModal/Index'
import { useState } from "react";
import DescriptionButton from "../components/DescriptionButton/Index";
import SearchBar from "../components/SearchBar/Index";

export default function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log("o estado do botão é",isModalVisible)

  return (
    <Container>        
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0473b3"
      />
      <Header />
      <SearchBar />
      <ProdutosScreen />
      <CustomModal 
        isVisible={isModalVisible}
        onClose={() => {setIsModalVisible(!isModalVisible);}}/>
    </Container>
  )
}