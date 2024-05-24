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

  const hours = pfe + 2;

  return (
    <TableContainer sx={sx}>
      <Table sx={{ border: 1 }}>
        <TableHead>
          <TableRow>
            <TableCell>Normal (CE)</TableCell>
            <TableCell>Square Wave (PFE)</TableCell>
            <TableCell>Period (Hours)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>
              <Typography variant="h6">
                {!isNaN(ce) ? ce.toFixed(1) : "0.0"}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">
                {!isNaN(pfe) ? pfe.toFixed(1) : "0.0"}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">
                {!isNaN(hours) ? hours.toFixed(1) : "0.0"}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MealCalcResults;
