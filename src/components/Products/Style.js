import styled from 'styled-components/native';

export const Produtos = styled.View`
  margin: 24px 30px 0;
  padding: 10px;
  gap:10px
  border-width: 1px;
  border-color: #EEEEEE;
  border-radius: 12px;
  justify-content: flex-start;
  flex-direction: row;
  width: 350px;
`;

export const ProdutosInfo = styled.View`
align-items: center;
flex-direction: column;
width: 60%
justify-content: flex-start;
align-items: stretch;
`;

export const ProdutosHeader = styled.View`
flex: 1
align-items: flex-start;

`;
export const ProdutosDescription = styled.View`

margin-bottom: 15px;
gap: 8px;
`;

export const ProdutosFooter = styled.View`

justify-content: space-between;
gap:8px;
`;
export const ProdutosAction = styled.View`
flex-direction: row;
justify-content: flex-start;
gap: 40px;
`;
export const ProdutosStatus = styled.View`

`;
export const ProdutosStatusIcon = styled.Image`
width: 16px;
height: 16px;
resize-mode: contain;
`;


export const ProdutosImage = styled.Image`
  width: 133px;
  height: 127px;
  background-color: #f63298;
  border-radius:12px;
`;