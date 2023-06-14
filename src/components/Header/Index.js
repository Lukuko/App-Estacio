import LogoImage from '../../assets/images/Mosaic_Logo.svg.png';
import { Container, Logo } from "./Style";
//Esse componente vai ser responsável exclusivamente pelo Header do app, onde vai ter a logo
export default function Header(){
    return(
        <Container>
            <Logo source={LogoImage}/>
        </Container>
    )
}
//O texto que será exibido no header do app