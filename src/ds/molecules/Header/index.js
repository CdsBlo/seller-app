import { string } from "prop-types";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header({ title, caption }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
        <Typography
          sx={{
            paddingLeft: 1.25,
          }}
        >
          {caption}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: string,
  caption: string,
};
