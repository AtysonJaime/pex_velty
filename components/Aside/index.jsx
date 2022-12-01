import { Box, Image } from "@chakra-ui/react";
import styles from "./Aside.module.scss";
import Menu from "./components/Menu";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Box className={styles["aside-img"]}>
        <Image src="Frame.svg" alt="Logo PEX Construções" />
      </Box>
      <Box className={styles["aside-menu"]}>
        <Menu />
      </Box>
    </aside>
  );
}
