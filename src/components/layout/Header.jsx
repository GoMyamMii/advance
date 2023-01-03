import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

const HeaderContainer = styled.div`
  height: 60px;
  background-color: #333;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
