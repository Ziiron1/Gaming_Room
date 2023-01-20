import React from 'react';
import MenuSection from './MenuSection';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 1rem;
`;

const plataformas = [
  { name: 'PC', id: 4 },
  { name: 'macOS', id: 5 },
  { name: 'Linux', id: 6 },
  { name: 'Playstation 3', id: 16 },
  { name: 'Playstation 4', id: 18 },
  { name: 'Playstation 5', id: 187 },
  { name: 'Xbox 360', id: 14 },
  { name: 'Xbox One', id: 1 },
  { name: 'Xbox Series S/X', id: 186 },
  { name: 'Nintendo Switch', id: 7 },
  { name: 'Android', id: 21 },
  { name: 'iOS', id: 3 },
  { name: 'Web', id: 171 }
];

// const parents_platformas = [
//   { name: 'Playstation', id: 2 },
//   { name: 'Xbox', id: 3 },
//   { name: 'Nintendo', id: 7 },
// ]

function SideBarMenu() {
  return (
    <Navigation className='comeFromLeft'>
      {/* <MenuSection title="All in One" items={parents_platformas} /> */}
      <MenuSection title="Platforms" items={plataformas}>
        {plataformas.map(platform => (
          <li key={platform.id} className='menu_item'>{platform.name}</li>
        ))}
      </MenuSection>
    </Navigation>
  );
}

export default SideBarMenu
