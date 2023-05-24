import { useFonts, NunitoSans_400Regular,  NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';


import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme} >

      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      { fontsLoaded ?  <Routes/> :  <Loading/> } 
      
    </ThemeProvider>
  );
}

