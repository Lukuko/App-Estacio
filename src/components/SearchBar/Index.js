import loupe from '../../assets/images/loupe.png';
import { Container, SearchIcon, StyledTextInput } from './Style';

export default function SearchBar({ onPress }) {
    return (
      <Container>
        <StyledTextInput onPress={onPress} placeholder="Pesquise o Equipamento desejado"/>
        <SearchIcon source={loupe}/>
      </Container>
    );
  }