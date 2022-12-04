import { Hide } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Aside from "../components/Aside";
import Main from "../components/Main";

const StyledPage = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <>
      <StyledPage>
        <Hide below="md">
          <Aside />
        </Hide>
        <Main />
      </StyledPage>
    </>
  );
}
