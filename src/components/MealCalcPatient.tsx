import { Box, Stack, Typography } from "@mui/material";
import Field from "./MealCalcField";

function MealCalcPatient({ sx }: { sx?: object }) {
  return (
    <Box sx={sx}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Patient
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }}>
        <Field id="patient-dose-per-unit" label="Dose per unit" />
      </Stack>
    </Box>
  );
}

export default MealCalcPatient;
