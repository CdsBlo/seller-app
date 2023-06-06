import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Header from "../Components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      MAIN
    </ThemeProvider>
  );
}

export default App;
