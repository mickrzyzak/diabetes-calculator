import { useState } from "react";
import { TextField } from "@mui/material";
import { MealCalcReducerType } from "../reducers/mealCalcReducer";

type FieldType = {
  id: string;
  label: string;
  action: string;
  value: string;
  dispatch: React.Dispatch<MealCalcReducerType>;
};

function Field({ id, label, action, value, dispatch }: FieldType) {
  const [error, setError] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setError(isNaN(parseFloat(value)));

    dispatch({
      type: action,
      payload: value,
    });
  };

  return (
    <TextField
      id={id}
      label={label}
      variant="standard"
      type="text"
      autoComplete="off"
      required
      inputProps={{
        minLength: 0,
        maxLength: 10,
        inputMode: "decimal",
        "data-testid": id,
      }}
      sx={{ flex: 1 }}
      value={value}
      error={error}
      onChange={handleChange}
    />
  );
}

export default Field;
