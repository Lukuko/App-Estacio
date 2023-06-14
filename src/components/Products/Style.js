import styled from 'styled-components/native';

export const Card = styled.View`
  margin: 14px 30px 0;
  padding: 10px;
  gap:10px
  border-width: 1px;
  border-color: #EEEEEE;
  border-radius: 12px;
  justify-content: flex-start;
  flex-direction: row;
  width: 350px;
`;

export const CardInfo = styled.View`
align-items: center;
flex-direction: column;
width: 60%
justify-content: flex-start;
align-items: stretch;
`;

export const CardHeader = styled.View`
flex: 1
align-items: flex-start;

`;
export const CardDescription = styled.View`

margin-bottom: 15px;
gap: 8px;
`;

export const CardFooter = styled.View`

justify-content: space-between;
gap:8px;
`;
export const CardAction = styled.View`
flex-direction: row;
justify-content: flex-start;
gap: 40px;
`;
export const CardStatus = styled.View`

`;
export const CardStatusIcon = styled.Image`
width: 16px;
height: 16px;
resize-mode: contain;
`;


export const CardImage = styled.Image`
  width: 133px;
  height: 127px;
  border-radius:12px;
`;
export const ViewTitle = styled.Text`
margin-left: 35px;
margin-top: 10px;
`;