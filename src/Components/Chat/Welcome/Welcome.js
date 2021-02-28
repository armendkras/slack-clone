import React from "react";
import styled from "styled-components";

function Welcome() {
  return (
    <WelcomeC>
      <h1>Add or Select a Channel </h1>
    </WelcomeC>
  );
}

export default Welcome;
const WelcomeC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  > h1 {
    padding: 50px;
    border: 3px solid var(--slack-color);
    border-radius: 10px 30px;
  }
`;
