import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import styles from "./FilterData.module.scss";
import GridIcon from "../../../GridIcon";

export default function FilterPorDate() {
  return (
    <Flex className={styles["container-filter-data"]}>
      <p>Filtrar por data</p>
      <Flex className={styles["container-inputs-data"]}>
        <InputGroup className={styles["input-group-data"]}>
          <InputLeftElement children={<GridIcon />} />
          <Input type="text" placeholder="Data inicial" mask="xx/xx/xxxx" />
        </InputGroup>
        <InputGroup className={styles["input-group-data"]}>
          <InputLeftElement children={<GridIcon color="gray.300" />} />
          <Input type="text" placeholder="Data final" mask="xx/xx/xxxx" />
        </InputGroup>
      </Flex>
    </Flex>
  );
}
