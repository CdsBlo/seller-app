import { MenuList, MenuListItem, Link, Nav } from "./styles";
import { arrayOf, shape, string } from "prop-types";

export default function Menu({ items }) {
  return (
    <Nav>
      <MenuList>
        {items.map(({ name, route }) => (
          <MenuListItem key={route}>
            <Link href={route}>{name}</Link>
          </MenuListItem>
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
