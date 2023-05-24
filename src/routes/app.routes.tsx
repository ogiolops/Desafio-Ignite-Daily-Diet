import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { EditMeal } from '@screens/EditMeal';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen 
        name='home'
        component={Home}
      />
      <Screen 
        name='statistics'
        component={Statistics}
      />
      <Screen 
        name='newmeal'
        component={NewMeal}
      />
      <Screen 
        name='feedback'
        component={Feedback}
      />
      <Screen 
        name='meal'
        component={Meal}
      />
      <Screen 
        name='editmeal'
        component={EditMeal}
      />
    </Navigator>
  );
}