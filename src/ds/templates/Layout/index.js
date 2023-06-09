import { Outlet } from "react-router-dom";
import { Header, Menu } from "../../molecules";

const items_old = [
  { name: "Produits", route: "/products" },
  { name: "Commandes", route: "/commandes" },
  { name: "Finance", route: "/finance" },
  { name: "Rapports", route: "/reports" },
  { name: "Messages", route: "/messages" },
  { name: "Markeplaces", route: "/markplaces" },
];

export default function Layout() {
  return (
    <>
      <Header title="Seller de vendre" caption="Comment est votre blanquette" />
      <Menu items={items_old} />
      <Outlet />
    </>
  );
}
