import React from "react";
import { Menu, MenuButton, IconButton } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";

export default function AltoConstrasteButton() {
  return (
    <Menu>
      <MenuButton
        className="button-icon"
        as={IconButton}
        aria-label="Alto Contraste"
        title="Alto Contraste"
        icon={<FaMoon />}
        variant="outline"
        onClick={() => {
          alert("Alto Constraste em construção!");
        }}
      />
    </Menu>
  );
}
