import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import router from "./router";
import theme from "./theme";
import { UserContext } from "../contexts";

const client = new QueryClient();
const user = { isLoggedIn: true };

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <UserContext.Provider user={user}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
