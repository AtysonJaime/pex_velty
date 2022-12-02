import { Box, Flex, IconButton } from "@chakra-ui/react";
import styles from "./CardInfoComIcone.module.scss";
import { MdAttachMoney } from "react-icons/md";

export default function CardInfoComIcone(props) {
  const color = props.cardInfoComIcone.colorSpan;
  return (
    <Box className={styles["card-info-com-icone"]}>
      <IconButton aria-label="Money" icon={<MdAttachMoney />}></IconButton>
      <Box>
        <Flex alignItems="center">
          <h3>{props.cardInfoComIcone.title}</h3>
          <span
            className={
              props.cardInfoComIcone.ahBadge
                ? styles["d-block"]
                : styles["d-none"]
            }
          >
            {props.cardInfoComIcone.badge}
          </span>
        </Flex>
        <p>{props.cardInfoComIcone.subtitle}</p>
      </Box>
      <span className={styles[color]}>{props.cardInfoComIcone.span}</span>
    </Box>
  );
}
