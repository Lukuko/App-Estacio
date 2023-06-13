import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin: 24px 20px 0;
  padding: 12px;
  border-width: 1px;
  border-color: #d4d3d3;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;
export const StyledTextInput = styled.TextInput`
  placeholderTextColor: #999;
  alignItems: center;
  width: 71%;
`;
export const SearchIcon = styled.Image`
  width: 16px;
  height: 16px;
  resize-mode: contain;
`;