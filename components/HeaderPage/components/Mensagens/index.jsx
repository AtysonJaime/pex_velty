import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  Flex,
  Avatar,
  Box,
  Badge,
  Text,
  Divider,
} from "@chakra-ui/react";
import { FaRegBell } from "react-icons/fa";

export default function MensagensMenu() {
  const MsgInfos = [
    {
      id: "0001",
      user: {
        name: "Segun Adebayo",
        photo: "user.png",
      },
      mensagem: "Visualizar novo cadastro",
    },
    {
      id: "0002",
      user: {
        name: "Catarina Alberto",
        photo: "user.png",
      },
      mensagem: "Nova mensagem enviada",
    },
    {
      id: "0003",
      user: {
        name: "Sandra Fatima",
        photo: "user.png",
      },
      mensagem: "Visualizar erro no cadastro",
    },
  ];

  return (
    <Menu isLazy>
      <div className="action-menu">
        <MenuButton
          className="button-icon"
          as={IconButton}
          aria-label="Mensagens"
          title="Mensagens"
          icon={<FaRegBell />}
          variant="outline"
        />
        <Badge ml="1" colorScheme="green">
          {MsgInfos.length}
        </Badge>
      </div>

      <MenuList>
        <MenuGroup
          title={"Você possue " + MsgInfos.length + " novas mensagens!"}
        >
          {MsgInfos.map((msg) => {
            return (
              <>
                <Divider />
                <MenuItem key={msg.id}>
                  <Flex>
                    <Avatar src={msg.user.photo} />
                    <Box ml="3">
                      <Text fontWeight="bold">
                        {msg.user.name}
                        <Badge ml="1" colorScheme="green">
                          New
                        </Badge>
                      </Text>
                      <Text fontSize="sm">{msg.mensagem}</Text>
                    </Box>
                  </Flex>
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
