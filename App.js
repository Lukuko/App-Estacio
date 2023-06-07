import { useFonts } from "expo-font";//Dependência do expo para usar fontes
import Main from './src/Main/Index';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
    })//uma constante contendo um array com o nome das fontes e o caminho das mesmas
    if (!isFontsLoaded) {
      return null;//faz uma verificação se as fontes forem carregadas
    }
  return (
    <Main />
  );
}
