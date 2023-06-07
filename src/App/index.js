import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Header, Menu } from "../ds/molecules";

const items_old = [
  { name: "Produits", route: "/products" },
  { name: "Commandes", route: "/order" },
  { name: "Finance", route: "/finance" },
  { name: "Rapports", route: "/reports" },
  { name: "Messages", route: "/messages" },
  { name: "Markeplaces", route: "/markplaces" },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        title="Sel'heure de vendre"
        caption="Comment est votre blanquette ?"
      />
      <Menu items={items_old} />
    </ThemeProvider>
  );
}
