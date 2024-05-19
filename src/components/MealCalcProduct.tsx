import { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Field from "./MealCalcField";
import MealCalcContext from "../contexts/MealCalcContext";

function MealCalcProduct({ sx }: { sx?: object }) {
  const { state, dispatch } = useContext(MealCalcContext);

  return (
    <Box sx={sx}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Product (per 100 grams)
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }}>
        <Field
          id="product-carbohydrates"
          label="Carbohydrates"
          action="setCarbohydrates"
          value={state.carbohydrates || ""}
          dispatch={dispatch}
        />
        <Field
          id="product-proteins"
          label="Proteins"
          action="setProteins"
          value={state.proteins || ""}
          dispatch={dispatch}
        />
        <Field
          id="product-fat"
          label="Fat"
          action="setFat"
          value={state.fat || ""}
          dispatch={dispatch}
        />
      </Stack>
    </Box>
  );
}

export default MealCalcProduct;
