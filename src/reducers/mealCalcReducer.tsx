export type MealCalcReducerType = {
  type: string;
  payload?: string;
};

function MealCalcReducer(state: object, action: MealCalcReducerType) {
  switch (action.type) {
    case "setCarbohydrates":
      return { ...state, carbohydrates: action.payload };
    case "setProteins":
      return { ...state, proteins: action.payload };
    case "setFat":
      return { ...state, fat: action.payload };
    case "setDosePerUnit":
      return { ...state, dosePerUnit: action.payload };
    case "setMealGrams":
      return { ...state, mealGrams: action.payload };
    default:
      return state;
  }
}

export default MealCalcReducer;
