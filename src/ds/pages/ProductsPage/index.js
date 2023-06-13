import { Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  ConditionProductChip,
  Price,
  ProductImage,
  ProductLink,
} from "../../atoms";
import { useProducts } from "../../../hooks";
import { Outlet, useParams } from "react-router-dom";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: ProductImage,
    sortable: false,
  },
  { field: "name", headerName: "Produit", width: 250, renderCell: ProductLink },
  {
    field: "condition",
    headerName: "Condition",
    width: 150,
    renderCell: ConditionProductChip,
  },
  { field: "price", headerName: "Prix (EUR)", width: 150, renderCell: Price },
  {
    field: "stock",
    headerName: "Stock",
    description: "Stock disponible à la vente",
    width: 150,
  },
];

// const rows = [
//   {
//     description:
//       "Récepteurs de télévision à haute définition 819 lignes, donnant une image très nette et d'un contraste agréable ne fatiguant pas la vue, le montage de la partie radio donne un son absolument remarquable.",
//     id: "d0b199e8-61f4-48fb-afe1-ad423b700556",
//     name: "Électronique Doux Lard",
//     imageUrl: "https://picsum.photos/seed/033xgdIP/640/640",
//     price: 47.64,
//     condition: "new",
//     stock: 0,
//   },
//   {
//     description:
//       "Maillot en coton fin à rayures se boutonnant devant pour enfants.",
//     id: "8e68fc8a-f653-44b1-a6c0-4143290eebf4",
//     name: "Élégant Coton Savon",
//     imageUrl: "https://picsum.photos/seed/DI5aTum/640/640",
//     price: 85.51,
//     condition: "used",
//     stock: 9,
//   },
// ];

export default function ProductsPage() {
  const { isLoading, products } = useProducts();
  const { productId } = useParams();

  const leftWidth = productId ? 7 : 12;
  const rightWidth = productId ? 5 : 0;

  return (
    <>
      <Grid item container>
        <Box sx={{ height: 800 }} xs={leftWidth}>
          <DataGrid
            columns={columns}
            rows={products}
            disableRowSelectionOnClick={true}
            loading={isLoading}
          />
        </Box>
        <Grid item component="aside" xs={rightWidth}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
