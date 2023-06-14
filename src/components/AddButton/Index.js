import { Text } from '../Text';
import { Container, Add } from './Style';
export default function AddButton({ onPress }) {
  console.log("O botão troca o estado para", onPress);
  return (
    <Container onPress={onPress}>
      <Add>
        <Text size={40} color="#FFFFFF">+</Text>
      </Add>
    </Container>
  );
}