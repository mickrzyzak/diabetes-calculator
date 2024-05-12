import { Box, Typography } from "@mui/material";
import MealCalcProduct from "./MealCalcProduct";
import MealCalcPatient from "./MealCalcPatient";
import MealCalcMeal from "./MealCalcMeal";

function MealCalc() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Meal to CE and PFE
      </Typography>
      <MealCalcProduct sx={{ mb: 4 }} />
      <MealCalcPatient sx={{ mb: 4 }} />
      <MealCalcMeal />
    </Box>
  );
}

export default MealCalc;
