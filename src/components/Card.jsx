import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from './Image';
import styles from './Card.Module.css'

const CardGame = styled.div`
  border-radius: 0.75rem;
  border-bottom: 1px solid #131313;
  overflow: hidden;
  position: relative;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.95) 2px 3px 8px;
  transition: all ease .3s;

  border: 1px solid rgba(255, 255, 255, .0375);

  &:hover {
    transform: translateX(.5%) translateY(-1%);
    
  }
  `;

const Padding = styled.div`
  width: 10vw;

`

const Info = styled.div`
  padding: 1rem;
  display: grid;
  min-height: 100px;
`;

const Name = styled.h2`
  font-size: 1.175rem;
  line-height: 1.4;
  color: #efff;
`

function Card({ name, background_image, path, id, dominant_color, released }) {
  return (
    <div>
      <CardGame style={{ backgroundColor: `#${dominant_color}` }}>
        <Link to={`${path}${id}`}>
          <Image src={background_image} height='180px' alt={name} />
          <Padding>
            <Info>
              <Name>{name}</Name>
              <small style={{ fontSize: "12px" }}> Released {released}</small>
            </Info>
          </Padding>
        </Link>
      </CardGame>
    </div>
  );
}

export default Card;
