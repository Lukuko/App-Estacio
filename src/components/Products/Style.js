import styled from 'styled-components/native';

export const Produtos = styled.View`
  margin: 24px 20px 0;
  padding: 24px;
  border-width: 1px;
  border-color: #EEEEEE;
  border-radius: 12px;
  gap: 24px;
  align-items: center;
`;

export const ProdutosHeader = styled.View`
align-items: center`;

export const ProdutosDescription = styled.View``;

export const ProdutosFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ProdutosStatus = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ProdutosIcon = styled.Image`
  width: 16px;
  height: 16px;
  resize-mode: contain;
`;

export const ProdutosAction = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 16px;
`;
export const ProdutosImage = styled.Image`
  width: 233px;
  height: 117px;
  background-color: #f63298;
`;