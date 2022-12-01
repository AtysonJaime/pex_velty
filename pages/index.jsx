import React from "react";
import styled from "styled-components";
import Aside from "../components/Aside";

const StyledPage = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <>
      <StyledPage>
        <Aside />
      </StyledPage>
    </>
  );
}
