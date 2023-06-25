import { mealsGetAll } from "./mealsGetAll";


export async function editMeal() {
  try {
    const storage = await mealsGetAll()
    console.log(storage)
  } catch (error) {
    throw error;
  }
}