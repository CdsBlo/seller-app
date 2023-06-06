import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" component="h1">
          SellerApp
        </Typography>
        <Typography
          sx={{
            paddingLeft: 1.25,
          }}
        >
          Bienvenue
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
