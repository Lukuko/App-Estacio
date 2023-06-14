import Header from "../components/Header/Index";
import ProdutosScreen from "../components/Products/Index";
import { StatusBar } from "expo-status-bar";
import { Container } from "./Style";
import SearchBar from "../components/SearchBar/Index";

export default function Main() {
  return (
    <Container>        
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0473b3"
      />
      <Header />
      <SearchBar />
      <ProdutosScreen />
    </Container>
  )
}
