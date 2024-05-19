import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Field from "./MealCalcField";
import MealCalcContext from "../contexts/MealCalcContext";

function MealCalcMeal({ sx }: { sx?: object }) {
  const { state, dispatch } = useContext(MealCalcContext);

  return (
    <Box sx={sx}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Meal
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }}>
        <Field
          id="meal-grams"
          label="Grams"
          action="setMealGrams"
          value={state.mealGrams || ""}
          dispatch={dispatch}
        />
      </Stack>
    </Box>
  );
}

export default MealCalcMeal;
