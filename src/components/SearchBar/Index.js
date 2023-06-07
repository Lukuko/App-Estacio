import loupe from '../../assets/images/loupe.png';
import { Container, Add, SearchIcon } from './Style';

export default function SearchBar({ onPress }) {
    return (
      <Container onPress={onPress}>
        <SearchIcon source={loupe}/>
      </Container>
    );
  }