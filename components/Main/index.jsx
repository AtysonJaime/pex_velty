import HeaderPage from "../HeaderPage";
import FilterPorDate from "./components/FilterData";
import CardMoney from "./components/CardMoney";
import CardInfo from "./components/CardInfo";
import TableInfo from "./components/Tables";
import styled from "styled-components";
import CardInfoComIcone from "./components/CardInfoComIcone";
import { Flex } from "@chakra-ui/react";
import config from "../../config.json";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 18.125rem;
  width: calc(100% - 18.125rem);
  overflow: auto;
  padding-bottom: 1.25rem;

  .container-cards {
    padding: 0.625rem 1rem;
  }

  @media (max-width: 769px) {
    width: 100%;
    margin-left: 0;
  }
`;

export default function Main() {
  return (
    <StyledSection>
      <HeaderPage headerProps={config.main.headerProps} />
      <FilterPorDate />
      <Flex flexWrap="wrap" className="container-cards">
        {config.main.cardMoneyProps.map((card) => {
          return <CardMoney key={card.id} cardMoney={card} />;
        })}
      </Flex>
      <Flex flexWrap="wrap" className="container-cards">
        {config.main.cardInfoProps.map((card) => {
          return <CardInfo key={card.id} cardInfo={card} />;
        })}
      </Flex>
      <Flex flexWrap="wrap" className="container-cards">
        {config.main.cardInfoComIconeProps.map((card) => {
          return <CardInfoComIcone key={card.id} cardInfoComIcone={card} />;
        })}
      </Flex>
      <Flex flexWrap="wrap" className="container-cards">
        {config.main.tablesInfosProps.map((table) => {
          return <TableInfo key={table.id} dataTable={table} />;
        })}
      </Flex>
    </StyledSection>
  );
}
