import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <Typography variant="h4">Oops!</Typography>
      <Typography variant="p">
        Sorry, an unexpected error has occured.
      </Typography>
      <Typography variant="p">
        <i>{error.statusText || error.message}</i>
      </Typography>
    </div>
  );
}
