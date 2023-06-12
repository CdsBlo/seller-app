import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../ds/templates";
import {
  CommandesPage,
  ErrorPage,
  HomePage,
  ProductPage,
  ProductsPage,
} from "../ds/pages";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductPage /> },
      { path: "commandes", element: <CommandesPage /> },
    ],
  },
]);
