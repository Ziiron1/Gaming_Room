import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/controle.svg';

const HeaderContainer = styled.header`
  padding: 20px 20px;
`;

const LinkElem = styled(Link)`
  transition: .3s;
  outline: none;
  & svg > * {
    padding: 8px 0;
    transition: .3s;
  }

  :hover svg > *, :focus svg > * {
    fill: #FFF;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LinkElem to="/">
        <Logo />
      </LinkElem>
    </HeaderContainer>
  );
}

export default React.memo(Header);
