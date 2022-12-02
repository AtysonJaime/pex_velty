import { Box, Divider, IconButton } from "@chakra-ui/react";
import { MdAttachMoney } from "react-icons/md";

import styles from "./CardMoney.module.scss";

export default function CardMoney(props) {
  const color = props.cardMoney.colorBox;
  return (
    <Box className={styles["card-money"] + " " + styles[color]}>
      <IconButton aria-label="Money" icon={<MdAttachMoney />}></IconButton>
      <Box className={styles["card-money-superior"]}>
        <h2>{props.cardMoney.TituloSuperior}</h2>
        <p>{props.cardMoney.SubtituloSuperior}</p>
      </Box>
      <Divider />
      <Box className={styles["card-money-inferior"]}>
        <h3>{props.cardMoney.TituloInferior}</h3>
        <p>{props.cardMoney.SubtituloInferior}</p>
      </Box>
    </Box>
  );
}
