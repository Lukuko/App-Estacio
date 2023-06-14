import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin: 10px 20px 0;
  padding: 12px;
  border-width: 1px;
  border-color: #d4d3d3;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-bottom: 15px;
`;
export const StyledTextInput = styled.TextInput`
  placeholderTextColor #999;
  alignItems: center;
  width: 71%;
`;
export const SearchIcon = styled.Image`
  width: 16px;
  height: 16px;
  resize-mode: contain;
  margin-right: 5px;
`;

export const Overlay = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #FFFFFF;
  width: 100%;
  border-radius: 8px;
  padding: 24px;
`;