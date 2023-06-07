//import { Link as MUILink } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RRDLink } from "react-router-dom";

export const MenuList = styled("ol")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  display: "flex",
  listStyleType: "none",
  padding: 0,
  margin: 0,
}));

export const Link = styled(RRDLink, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ current, theme }) => ({
  display: "flex",
  alignItems: "center",
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textDecoration: "none",
  color: theme.palette.common.white,
  ...(current && {
    backgroundColor: theme.palette.primary.dark,
  }),
}));

export const Nav = styled("nav")(() => ({}));
