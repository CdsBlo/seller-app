import { Link as MUILink } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MenuList = styled("ol")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  display: "flex",
  listStyleType: "none",
  padding: 0,
  margin: 0,
}));

export const MenuListItem = styled("li")(() => ({
  alignItems: "center",
}));

export const Link = styled(MUILink, {
  shouldForwardProp: (prop) => prop !== "current",
})(({ current, theme }) => ({
  display: "inline-block",
  height: "40px",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textDecoration: "none",
  color: theme.palette.common.white,
  ...(current && {
    backgroundColor: theme.palette.primary.dark,
  }),
}));

export const Nav = styled("nav")(() => ({}));
