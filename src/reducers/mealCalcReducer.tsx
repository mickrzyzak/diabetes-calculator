import { MealCalcContextStateType } from "../contexts/MealCalcContext";

export type MealCalcReducerType = {
  type: string;
  payload: string;
};

function MealCalcReducer(
  state: MealCalcContextStateType,
  action: MealCalcReducerType
): MealCalcContextStateType {
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
