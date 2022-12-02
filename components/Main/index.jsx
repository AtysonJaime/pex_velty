import HeaderPage from "../HeaderPage";
import FilterPorDate from "./components/FilterData";
import CardMoney from "./components/CardMoney";
import styled from "styled-components";
import { Box, Flex } from "@chakra-ui/react";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
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
  const cardMoneyProps = [
    {
      id: "001",
      colorBox: "red-card",
      TituloSuperior: "R$ 312.321,00",
      SubtituloSuperior: "Receira total",
      TituloInferior: "R$ 67,20",
      SubtituloInferior: "Média por cliente",
    },
    {
      id: "002",
      colorBox: "blue-card",
      TituloSuperior: "R$ 74.421,00",
      SubtituloSuperior: "Lucro total",
      TituloInferior: "R$ 42,30",
      SubtituloInferior: "Média por cliente",
    },
    {
      id: "003",
      colorBox: "green-card",
      TituloSuperior: "R$ 3,12",
      SubtituloSuperior: "Lucro por venda",
      TituloInferior: "R$ 12,40",
      SubtituloInferior: "Média por cliente",
    },
  ];
  return (
    <StyledSection>
      <HeaderPage headerProps={headerProps} />
      <Box>
        <FilterPorDate />
      </Box>
      <Flex flexWrap="wrap">
        {cardMoneyProps.map((card) => {
          return <CardMoney key={card.id} cardMoney={card} />;
        })}
      </Flex>
    </StyledSection>
  );
}
