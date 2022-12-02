import HeaderPage from "../HeaderPage";
import FilterPorDate from "./components/FilterData";
import CardMoney from "./components/CardMoney";
import CardInfo from "./components/CardInfo";
import TableInfo from "./components/Tables";
import styled from "styled-components";
import CardInfoComIcone from "./components/CardInfoComIcone";
import { Flex } from "@chakra-ui/react";

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
  const cardInfoProps = [
    {
      id: "000001",
      title: "3.312",
      subtitle: "Clientes ativos",
      ahBadge: false,
      badge: "",
      colorSpan: "green",
      span: "+2,6% (+12)",
    },
    {
      id: "000002",
      title: "12",
      subtitle: "Novos clientes",
      ahBadge: false,
      badge: "",
      colorSpan: "green",
      span: "+15,3% (+2)",
    },
    {
      id: "000003",
      title: "42",
      subtitle: "Clientes adicionados",
      ahBadge: false,
      badge: "",
      colorSpan: "green",
      span: "+42,6% (+8)",
    },
    {
      id: "000004",
      title: "R$ 142,32",
      subtitle: "LTV",
      ahBadge: false,
      badge: "",
      colorSpan: "red",
      span: "-22,6% (+R$ 12,20)",
    },
    {
      id: "000005",
      title: "24,3%",
      subtitle: "Turnover",
      ahBadge: true,
      badge: "32",
      colorSpan: "green",
      span: "+42,6% (+3)",
    },
    {
      id: "000006",
      title: "54,42%",
      subtitle: "Turnover recuperado",
      ahBadge: true,
      badge: "12",
      colorSpan: "green",
      span: "+32,6% (+6)",
    },
  ];
  const cardInfoComIconeProps = [
    {
      id: "0000001",
      title: "312.321",
      subtitle: "Cotações realizadas",
      ahBadge: false,
      badge: "",
      colorSpan: "green",
      span: "+15,3% (+223)",
    },
    {
      id: "0000002",
      title: "212.012",
      subtitle: "Vendas finalizadas",
      ahBadge: false,
      badge: "",
      colorSpan: "green",
      span: "+15,3% (+223)",
    },
    {
      id: "0000003",
      title: "42.021",
      subtitle: "Cotações não concluídas",
      ahBadge: false,
      badge: "",
      colorSpan: "green",
      span: "+15,3% (+223)",
    },
    {
      id: "0000004",
      title: "3.122",
      subtitle: "Cotações não respondidas",
      ahBadge: true,
      badge: "3%",
      colorSpan: "green",
      span: "+15,3% (+223)",
    },
  ];
  const tablesInfosProps = [
    {
      id: "0000000000000001",
      title: "Planos",
      subtitle: "123 planos ativos",
    },
  ];
  return (
    <StyledSection>
      <HeaderPage headerProps={headerProps} />
      <FilterPorDate />
      <Flex flexWrap="wrap" className="container-cards">
        {cardMoneyProps.map((card) => {
          return <CardMoney key={card.id} cardMoney={card} />;
        })}
      </Flex>
      <Flex flexWrap="wrap" className="container-cards">
        {cardInfoProps.map((card) => {
          return <CardInfo key={card.id} cardInfo={card} />;
        })}
      </Flex>
      <Flex flexWrap="wrap" className="container-cards">
        {cardInfoComIconeProps.map((card) => {
          return <CardInfoComIcone key={card.id} cardInfoComIcone={card} />;
        })}
      </Flex>
      <Flex flexWrap="wrap" className="container-cards">
        {tablesInfosProps.map((table) => {
          return <TableInfo key={table.id} dataTable={table} />;
        })}
      </Flex>
    </StyledSection>
  );
}
