import React from "react";
import styled from "styled-components";

const Main = styled.div`
  position: relative;

  &::before {
    content: "";
    padding-top: 56%;
    display: block;
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default props => (
  <Main>
    <Iframe {...props} frameBorder="0" allowFullScreen={true} />
  </Main>
);
