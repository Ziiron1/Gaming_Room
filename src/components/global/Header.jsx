import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/controle.svg';
import { ReactComponent as User } from '../../img/user.svg'
import styles from './Header.Module.css'

const HeaderContainer = styled.header`
  padding: 20px 20px;
`;

const LinkElem = styled(Link)`
  transition: .3s;
  margin-left: 20px;
  font-size: 1.5em;
  font-weight: bold;
  & svg > * {
    padding: 8px 0;
    transition: .3s;
  }

  :hover svg > *, :focus svg > * {
    fill: #fff;
  }
`;


const Navigation = styled.nav`
    background: linear-gradient(180deg, rgba(0, 0, 0, .6) 5%, transparent);;
    color: #fff;
    z-index: 9999;
`;

function handleClick() {
  window.location.reload();
  localStorage.removeItem('currentPage');
}

function Header() {
  return (
    <>
      <div>
        <Navigation>
          <HeaderContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <LinkElem to="/">
                <div onClick={handleClick}>
                  <Logo />

                </div>
              </LinkElem>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', marginRight: '10px' }}>
                <User style={{ marginRight: '30px' }} />
                <a href='/'>
                  <span>Future Page</span>
                </a>
              </div>
            </div>
          </HeaderContainer>
        </Navigation>
      </div>
    </>
  );
}


export default React.memo(Header);
