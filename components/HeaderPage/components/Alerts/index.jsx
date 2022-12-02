import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  Alert,
  AlertIcon,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function AlertsMenu() {
  const alertInfos = [
    {
      id: "1",
      status: "error",
      mensagem: "Erro ocorrido ao produzir cadastro",
    },
    {
      id: "2",
      status: "success",
      mensagem: "Nova mensagem enviada",
    },
    {
      id: "3",
      status: "warning",
      mensagem: "Você precisa alterar sua senha",
    },
    {
      id: "4",
      status: "info",
      mensagem: "Progresso em 40%",
    },
  ];

  return (
    <Menu isLazy>
      <div className="action-menu">
        <MenuButton
          className="button-icon"
          as={IconButton}
          aria-label="Alerts"
          title="Alerts"
          icon={<IoIosInformationCircleOutline />}
          variant="outline"
        />
        <Badge ml="1" colorScheme="yellow">
          {alertInfos.length}
        </Badge>
      </div>

      <MenuList>
        <MenuGroup
          title={"Você possue " + alertInfos.length + " novas avisos!"}
        >
          {alertInfos.map((alert) => {
            return (
              <>
                <Divider />
                <MenuItem key={alert.id}>
                  <Alert status={alert.status}>
                    <AlertIcon />
                    {alert.mensagem}
                  </Alert>
                </MenuItem>
                <Divider />
              </>
            );
          })}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
