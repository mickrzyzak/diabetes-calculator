import { Box, Stack, Typography } from "@mui/material";
import Field from "./MealCalcField";

function MealCalcProduct({ sx }: { sx?: object }) {
  return (
    <Box sx={sx}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Product (per 100 grams)
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }}>
        <Field id="product-carbohydrates" label="Carbohydrates" />
        <Field id="product-proteins" label="Proteins" />
        <Field id="product-fat" label="Fat" />
      </Stack>
    </Box>
  );
}

export default MealCalcProduct;
