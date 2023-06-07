import { Text } from "../Text";
import { Container } from "./Style";
//Esse componente vai ser responsável exclusivamente pelo Header do app, onde vai ter a logo
export default function Header(){
    return(
        <Container>
            <Text size={24}>
                Logo
            </Text>
        </Container>
    )
}
//O texto que será exibido no header do app