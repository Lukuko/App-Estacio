import AddButton from "../components/AddButton/Index";
import Header from "../components/Header/Index";
import ProdutosScreen from "../components/Products/Index";
import { Container } from "./Style";//Importa o container do Style

export default function Main() {
    return (
        <Container>
            <Header/>
            <ProdutosScreen/>
            <AddButton />
        </Container>
    )
}
