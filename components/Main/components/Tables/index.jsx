import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";

import styles from "./Tables.module.scss";

export default function TableInfo(props) {
  return (
    <Box className={styles["table-info"]}>
      <Box className={styles["table-info-header"]}>
        <h3>{props.dataTable.title}</h3>
        <p>{props.dataTable.subtitle}</p>
      </Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {props.dataTable.theadItens.map((th) => {
                return <Th key={th.id}>{th.name}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {props.dataTable.tbodyItens.map((tr) => {
              return (
                <Tr key={tr.id}>
                  {tr.trItens.map((td) => {
                    return <Td key={td.id}>{td.name}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
