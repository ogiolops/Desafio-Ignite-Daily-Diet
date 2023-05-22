import { useFonts, NunitoSans_400Regular,  NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import { Home } from './src/screens/Home';
import { Meal } from './src/screens/Meal';
import { Loading } from './src/components/Loading';
import { Statistics } from './src/screens/Statistics';
import { NewMeal } from './src/screens/NewMeal';
import { Feedback } from './src/screens/Feedback';
import { EditMeal } from './src/screens/EditMeal';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme} >

      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      { fontsLoaded ?  <EditMeal/> :  <Loading/> } 
    </ThemeProvider>
  );
}

