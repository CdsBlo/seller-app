import { useQuery } from "react-query";
import api from "../../api";

export default function useProducts({ productId } = {}) {
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

  /* TODO BLO : Nice one but incomplete (no id)
  const queryResult = useQuery(
    ["products"],
    async () => await api.get("products").json()
  );

  return { ...queryResult, products: queryResult.data || [] };*/

  const queryKey = productId ? ["products", { productId }] : ["products"];
  const productApiUrl = productId ? `products/${productId}` : "products";

  const queryResult = useQuery(
    queryKey,
    async () => await api.get(productApiUrl).json()
  );

  const resource = productId
    ? { product: queryResult.data }
    : { products: queryResult.data || [] };

  return { ...queryResult, ...resource };
}
