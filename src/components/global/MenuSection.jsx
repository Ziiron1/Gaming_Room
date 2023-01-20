import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkElem = styled(NavLink)`
  background: #242424;
  padding: .5rem;
  border-radius: 8px;
  border: 1.5px solid #101010;
  transition: 0.2s;
  &:hover, &:focus {
    background: #424242;
  }
  &.active {
    color: #f3f3f3;
    background: #343434;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

function MenuSection({ title, items }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {items &&
        items.map((item) => (
          <LinkElem key={item.id} to={`games/${item.id}`}>
            {item.name}
          </LinkElem>
        ))}
    </Wrapper>
  );
}

export default React.memo(MenuSection);
