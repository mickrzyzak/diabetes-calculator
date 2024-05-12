import { Box, Stack, Typography } from "@mui/material";
import Field from "./MealCalcField";

function MealCalcMeal({ sx }: { sx?: object }) {
  return (
    <Box sx={sx}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Meal
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }}>
        <Field id="meal-grams" label="Grams" />
      </Stack>
    </Box>
  );
}

export default MealCalcMeal;
