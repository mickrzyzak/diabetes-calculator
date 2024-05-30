import { useContext } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import MealCalcContext from "../contexts/MealCalcContext";
import { styled } from "@mui/material/styles";

const TableDense = styled(Table)(() => ({
  "& .MuiTableCell-head": {
    lineHeight: 1.3,
  },
}));

function MealCalcResults({ sx }: { sx?: object }) {
  const { state } = useContext(MealCalcContext);

  const ce =
    (parseFloat(state.carbohydrates) / 10) *
    (parseFloat(state.mealGrams) / 100) *
    parseFloat(state.dosePerUnit);

  const pfe =
    ((parseFloat(state.proteins) * 4 + parseFloat(state.fat) * 9) / 100) *
    (parseFloat(state.mealGrams) / 100) *
    parseFloat(state.dosePerUnit);

  const total = ce + pfe;

  const hours = pfe + 2;

  return (
    <TableContainer sx={sx}>
      <TableDense size="small" sx={{ border: 1 }}>
        <TableHead>
          <TableRow sx={{ display: { xs: "none", sm: "table-row" } }}>
            <TableCell>Total (CE+PFE)</TableCell>
            <TableCell>Normal (CE)</TableCell>
            <TableCell>Square Wave (PFE)</TableCell>
            <TableCell>Period (Hours)</TableCell>
          </TableRow>
          <TableRow sx={{ display: { xs: "table-row", sm: "none" } }}>
            <TableCell>Total</TableCell>
            <TableCell>Normal</TableCell>
            <TableCell>Square Wave</TableCell>
            <TableCell>Period</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>
              <Typography variant="h6" data-testid="result-total">
                {!isNaN(total) ? total.toFixed(1) : "0.0"}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" data-testid="result-ce">
                {!isNaN(ce) ? ce.toFixed(1) : "0.0"}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" data-testid="result-pfe">
                {!isNaN(pfe) ? pfe.toFixed(1) : "0.0"}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" data-testid="result-hours">
                {!isNaN(hours) ? hours.toFixed(1) : "0.0"}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </TableDense>
    </TableContainer>
  );
}

export default MealCalcResults;
