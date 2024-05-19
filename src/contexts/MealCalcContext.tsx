import { createContext } from "react";
import { MealCalcReducerType } from "../reducers/mealCalcReducer";
import initialState from "../mealCalcInitialState";

export type MealCalcContextType = {
  state: {
    carbohydrates?: string;
    proteins?: string;
    fat?: string;
    dosePerUnit?: string;
    mealGrams?: string;
  };
  dispatch: React.Dispatch<MealCalcReducerType>;
};

const MealCalcContext = createContext<MealCalcContextType>({
  state: initialState,
  dispatch: () => null,
});

export default MealCalcContext;
