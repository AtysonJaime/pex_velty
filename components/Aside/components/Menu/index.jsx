import React from "react";
import { List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { IoMdHome, IoMdPerson } from "react-icons/io";
import { MdOutlineShoppingCart, MdBarChart } from "react-icons/md";
import GridIcon from "../../../GridIcon";
import styles from "./Menu.module.scss";

export default function Menu() {
  const [menuLista, setMenuList] = React.useState([
    {
      name: "Dashboard",
      icon: IoMdHome,
      active: true,
    },
    {
      name: "Vendas",
      icon: MdOutlineShoppingCart,
      active: false,
    },
    {
      name: "Relatórios",
      icon: MdBarChart,
      active: false,
    },
    {
      name: "Lojas parceiras",
      icon: GridIcon,
      active: false,
    },
    {
      name: "Clientes",
      icon: IoMdPerson,
      active: false,
    },
  ]);
  return (
    <List className={styles["list-menu"]}>
      {menuLista.map((item) => {
        return (
          <ListItem className={styles["menu-item"]} key={item.name}>
            <Link
              href="#"
              className={
                item.active
                  ? styles.active + " " + styles["menu-link"]
                  : styles["menu-link"]
              }
            >
              <ListIcon
                as={item.icon}
                className={styles["menu-link-icon"]}
              ></ListIcon>
              <div className={styles["menu-link-text"]}>
                <p>{item.name}</p>
                <div className={styles["menu-link-active"]}></div>
              </div>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
