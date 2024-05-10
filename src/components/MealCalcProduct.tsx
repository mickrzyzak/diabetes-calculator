import { Box, Stack, Typography } from "@mui/material";
import Field from "./MealCalcField";

function MealCalcProduct() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Product (per 100 grams)
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }}>
        <Field id="carbohydrates" label="Carbohydrates" />
        <Field id="proteins" label="Proteins" />
        <Field id="fat" label="Fat" />
      </Stack>
    </Box>
  );
}

export default MealCalcProduct;
