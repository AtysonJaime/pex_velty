import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  MenuDivider,
} from "@chakra-ui/react";

import { IoMdPerson, IoMdExit } from "react-icons/io";
import { GoGear } from "react-icons/go";

export default function ProfileMenu() {
  return (
    <Menu isLazy>
      <MenuButton
        className="button-icon"
        as={Button}
        aria-label="Abrir profile"
        title="Abrir profile"
      >
        <Avatar name="Dan Abrahmov" src="User.png" />
      </MenuButton>
      <MenuList>
        <MenuItem href="#" icon={<IoMdPerson />}>
          Perfil
        </MenuItem>
        <MenuItem href="#" icon={<GoGear />}>
          Configurações
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<IoMdExit />}>Encerrar sessão</MenuItem>
      </MenuList>
    </Menu>
  );
}
