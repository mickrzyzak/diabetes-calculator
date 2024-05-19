import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

function MealCalcResults({ sx }: { sx?: object }) {
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
              <Typography variant="h6">0</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">0</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">0</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MealCalcResults;
