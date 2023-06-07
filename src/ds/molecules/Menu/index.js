import { MenuList, Link, Nav } from "./styles";
import { arrayOf, shape, string } from "prop-types";
import { Link as RRDLink } from "react-router-dom";

export default function Menu({ items }) {
  return (
    <Nav>
      <MenuList>
        {items.map(({ name, route }) => (
          <li key={route}>
            <Link to={route} component={RRDLink}>
              {name}
            </Link>
          </li>
        ))}
      </MenuList>
    </Nav>
  );
}

Menu.propTypes = {
  items: arrayOf(
    shape({
      name: string,
      route: string,
    })
  ),
};
