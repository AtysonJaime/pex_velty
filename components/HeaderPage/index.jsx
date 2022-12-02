import HeaderBreadcrumb from "./components/Breadcrumb";
import Title from "./components/Title";
import AlertsMenu from "./components/Alerts";
import MensagensMenu from "./components/Mensagens";
import AltoConstrasteButton from "./components/AltoContraste";
import ProfileMenu from "./components/Profile";
import styles from "./HeaderPage.module.scss";
import {
  Flex,
  Box,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

export default function HeaderPage(props) {
  const titlePage = props.headerProps.title;
  const breadcrumpProps = props.headerProps.breadcrumb;
  return (
    <Flex className={styles["header-page"]}>
      <Box>
        <HeaderBreadcrumb breadcrumbItens={breadcrumpProps} />
        <Title nameTitleHeader={titlePage} />
      </Box>
      <Box className={styles["header-page-actions"]}>
        <InputGroup className={styles["input-busca"]}>
          <InputLeftElement pointerEvents="none" children={<IoSearch />} />
          <Input type="text" placeholder="Buscar" />
        </InputGroup>
        <Flex>
          <MensagensMenu />
          <AltoConstrasteButton />
          <AlertsMenu />
        </Flex>
        <Flex>
          <ProfileMenu />
        </Flex>
      </Box>
    </Flex>
  );
}
