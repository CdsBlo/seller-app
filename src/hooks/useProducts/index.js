import { useQuery } from "react-query";
import api from "../../api";

export default function useProducts() {
  /* TODO BLO : Old notation
  const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
      fetch("http://localhost:3004/products")
        .then((response) => response.json())
        .then((products) => setProducts(products))
        .catch((error) => console.error(error));
    });*/

  /* TODO BLO : Obsolete notation
  React.useEffect(() => {
    try {
      const fectchProduct = async () => {
        const response = await fetch("http://localhost:3004/products");
        const productItems = await response.json();
        setProducts(productItems);
      };
      fectchProduct();
    } catch (error) {
      console.error(error);
    }
  }, [setProducts]);*/

  const queryResult = useQuery(
    ["products"],
    async () => await api.get("products").json()
  );

  return { ...queryResult, products: queryResult.data || [] };
}
