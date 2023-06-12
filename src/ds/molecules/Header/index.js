import { string } from "prop-types";
import { AppBar, Link as MuiLink, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header({ title, caption }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <MuiLink component={Link} to="/" sx={{ color: "black" }}>
          <Typography variant="h3" component="h1">
            {title}
          </Typography>
        </MuiLink>
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
