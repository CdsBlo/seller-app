import { MenuList, Link, Nav } from "./styles";
import { arrayOf, shape, string } from "prop-types";

export default function Menu({ items }) {
  return (
    <Nav>
      <MenuList>
        {items.map(({ name, route }) => (
          <li key={route}>
            <Link href={route}>{name}</Link>
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
