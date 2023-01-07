import React from 'react';
import MenuSection from './MenuSection';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1rem;
`;

const plataformas = [
  { name: 'PC', id: 1 },
  { name: 'Playstation', id: 2 },
  { name: 'Xbox', id: 3 },
  { name: 'Nintendo', id: 7 },
];

function SideBarMenu() {
  return (
    <Navigation className='comeFromLeft'>
      <MenuSection title="Plataformas" items={plataformas} />
    </Navigation>
  );
}

export default SideBarMenu
