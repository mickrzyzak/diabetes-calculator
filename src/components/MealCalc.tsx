import { Box, Typography } from "@mui/material";
import MealCalcProduct from "./MealCalcProduct";

function MealCalc() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Meal to CE and PFE
      </Typography>
      <MealCalcProduct />
    </Box>
  );
}

export default MealCalc;
