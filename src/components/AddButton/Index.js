import { Text } from '../Text';
import { Container, Add } from './Style';

export default function AddButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Add>
        <Text size={40} color="#FFFFFF">+</Text>
      </Add>
    </Container>
  );
}