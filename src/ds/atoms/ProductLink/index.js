import { shape, string } from "prop-types";
import { Link } from "react-router-dom";

export default function ProductLink({ row }) {
  return <Link to={`/products/${row.id}`}> {row.name}</Link>;
}

ProductLink.propTypes = {
  row: shape({
    name: string,
    id: string,
  }),
};
