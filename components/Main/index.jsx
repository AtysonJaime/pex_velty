//import styles from "./Main.module.scss";
//import { Flex, Spacer, Box } from "@chakra-ui/react";
import HeaderPage from "../HeaderPage";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  padding: 3.0625rem 1.875rem;
  margin-left: 18.125rem;
  width: calc(100% - 18.125rem);
  overflow: auto;
`;

export default function Main() {
  const headerProps = {
    title: "Velty Dashboard",
    breadcrumb: [
      {
        name: "Principal",
        isCurrentPage: false,
        link: "/",
      },
      {
        name: "Dashboard",
        isCurrentPage: true,
        link: "/",
      },
    ],
  };
  return (
    <StyledSection>
      <HeaderPage headerProps={headerProps} />
    </StyledSection>
  );
}
