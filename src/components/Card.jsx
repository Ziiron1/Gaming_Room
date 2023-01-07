import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from './Image';

const CardGame = styled.div`
  background: #202020;
  border-radius: 0.75rem;
  overflow: hidden;
  height: 100%;
`;

const Info = styled.div`
  padding: 1rem;
  display: grid;
  min-height: 60px;
`;

const Name = styled.h2`
  font-size: 1.175rem;
  line-height: 1.5;
`

function Card({ name, background_image, id, path }) {
  return (
    <Link to={`${path}${id}`}>
      <CardGame>
        <Image src={background_image} height='200px' alt={name} />
        <Info>
          <Name>{name}</Name>
        </Info>
      </CardGame>
    </Link>
  );
}

export default Card;
