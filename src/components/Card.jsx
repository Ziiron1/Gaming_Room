import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from './Image';

const CardGame = styled.div`
  background: #202020;
  border-radius: 0.75rem;
  border-bottom: 1px solid #131313;
  overflow: hidden;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.922) 0px 3px 8px;


  `;

const Info = styled.div`
  padding: 1rem;
  display: grid;
  min-height: 100px;
`;

const Name = styled.h2`
  font-size: 1.175rem;
  line-height: 1.5;
`

function Card({ name, background_image, path, slug }) {
  return (
    <Link to={`${path}${slug}`}>
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
