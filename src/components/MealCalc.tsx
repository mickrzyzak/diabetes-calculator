import { useReducer } from "react";
import { Box, Typography } from "@mui/material";
import Product from "./MealCalcProduct";
import Patient from "./MealCalcPatient";
import Meal from "./MealCalcMeal";
import Results from "./MealCalcResults";
import mealCalcReducer from "../reducers/mealCalcReducer";
import MealCalcContext from "../contexts/MealCalcContext";
import initialState from "../mealCalcInitialState";

function MealCalc() {
  const [state, dispatch] = useReducer(mealCalcReducer, initialState);

  return (
    <MealCalcContext.Provider value={{ state, dispatch }}>
      <Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Meal to CE and PFE
        </Typography>
        <Product sx={{ mb: 4 }} />
        <Meal sx={{ mb: 4 }} />
        <Patient sx={{ mb: 5 }} />
        <Typography variant="h5" sx={{ mb: 2 }}>
          Bolus
        </Typography>
        <Results />
      </Box>
    </MealCalcContext.Provider>
  );
}

export default MealCalc;
