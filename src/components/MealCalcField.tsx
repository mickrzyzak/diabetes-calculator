import { TextField } from "@mui/material";

function Field({ id, label }: { id: string; label: string }) {
  return (
    <TextField
      id={id}
      label={label}
      variant="standard"
      type="numer"
      autoComplete="off"
      required
      inputProps={{ min: 0, max: 100000 }}
      sx={{ flex: 1 }}
    />
  );
}

export default Field;
