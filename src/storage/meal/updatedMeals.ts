import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "src/dtos/MealDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";


export async function updatedMeals(mealUpdated: MealDTO){
  try {
  
    const storage = await mealsGetAll()
    console.log(storage) 
    console.log(mealUpdated.date) 
    const mealToUpdate = storage.map(meals =>{
      if(meals.id === mealUpdated.id )
      return{
        ...mealUpdated
      }
      return meals;
    })
    
    const updated = JSON.stringify(mealToUpdate)

    await AsyncStorage.setItem(MEAL_COLLECTION, updated)

    console.log('antiga',mealToUpdate)

  } catch (error) {
    throw error;
  }
}
