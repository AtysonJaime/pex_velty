import React from "react";
import styled from "styled-components";
import styles from "./SidebarFlutuante.module.scss";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Menu from "../../../Aside/components/Menu";

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid #a3aed0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #a3aed0;
    fill: #a3aed0;
  }
`;
export default function SidebarFlutuante() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <StyledButton ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 15 15"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </StyledButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Sidebar</DrawerHeader>
          <DrawerBody style={styles.modalBody}>
            <Menu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
