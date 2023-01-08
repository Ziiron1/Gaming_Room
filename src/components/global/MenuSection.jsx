import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkElem = styled(NavLink)`
  background: #202020;
  padding: 1rem;
  border-radius: 8px;
  transition: 0.2s;
  &:hover, &:focus {
    background: #343434;
  }
  &.active {
    color: #fff;
    background: #343434;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

function MenuSection({ title, items }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {items &&
        items.map((item) => (
          <LinkElem key={item.id} to={`games/${item.slug}`}>
            {item.name}
          </LinkElem>
        ))}
    </Wrapper>
  );
}

export default React.memo(MenuSection);
