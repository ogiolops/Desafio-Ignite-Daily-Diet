export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: {
        newMeal: object;
      };
      statistics: {
        percentMeal: number;
        diet: string;
      };
      newmeal: undefined;
      feedback: {
        statusDiet: boolean;
      };
      meal: undefined;
      editmeal: undefined;
    }
  }
}