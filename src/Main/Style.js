import styled from "styled-components/native";
import {Platform, StatusBar} from "react-native";
//O plataform e o status bar vão servir para remover quaisquer diferenças na status bar entre Ios e Android

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView `
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    flex: 1;
`;

//O template iteral passa uma condição que irá lidar com as diferenças nas alturas das barras de status entre Ios e Android