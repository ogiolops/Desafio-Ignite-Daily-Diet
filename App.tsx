import { StatusBar } from 'react-native';
import { useFonts, NunitoSans_400Regular,  NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { Diet } from './src/screens/Diet';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { Statistics } from './src/screens/Statistics';

import { NewMeal } from './src/screens/NewMeal';
import { Feedback } from './src/screens/Feedback';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme} >

      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      { fontsLoaded ? <Feedback/> :  <Loading/> } 
    </ThemeProvider>
  );
}

