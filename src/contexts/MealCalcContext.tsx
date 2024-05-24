import { createContext } from "react";
import { MealCalcReducerType } from "../reducers/mealCalcReducer";
import initialState from "../mealCalcInitialState";

export type MealCalcContextStateType = {
  carbohydrates: string;
  proteins: string;
  fat: string;
  dosePerUnit: string;
  mealGrams: string;
};

export type MealCalcContextType = {
  state: MealCalcContextStateType;
  dispatch: React.Dispatch<MealCalcReducerType>;
};

const MealCalcContext = createContext<MealCalcContextType>({
  state: initialState,
  dispatch: () => {},
});

export default MealCalcContext;
