import { Box, Flex } from "@chakra-ui/react";
import styles from "./CardInfo.module.scss";

export default function CardInfo(props) {
  const color = props.cardInfo.colorSpan;
  return (
    <Box className={styles["card-info"]}>
      <Box>
        <p>{props.cardInfo.subtitle}</p>
        <Flex alignItems="center">
          <h3>{props.cardInfo.title}</h3>
          <span
            className={
              props.cardInfo.ahBadge ? styles["d-block"] : styles["d-none"]
            }
          >
            {props.cardInfo.badge}
          </span>
        </Flex>
      </Box>
      <span className={styles[color]}>{props.cardInfo.span}</span>
    </Box>
  );
}
