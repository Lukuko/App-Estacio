import AddButton from "../components/AddButton/Index"
import Header from "../components/Header/Index";
import ProdutosScreen from "../components/Products/Index";
import { StatusBar } from "expo-status-bar";
import { Container } from "./Style";//Importa o container do Style
export default function Main() {
    
    return (
        <>
        <StatusBar
        barStyle="light-content"
        backgroundColor="#0473b3"
        />
        <Container>
            <Header/>
            <ProdutosScreen/>
            <AddButton/>
        </Container>
        </>
    )
}
