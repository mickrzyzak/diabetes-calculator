import { Container } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MealCalc from "./MealCalc";

function App() {
  return (
    <Container maxWidth="lg" sx={{ my: { xs: 3, sm: 5 } }}>
      <MealCalc />
    </Container>
  );
}

export default App;
