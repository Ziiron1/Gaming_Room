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
  box-shadow: rgba(0, 0, 0, 0.922) 0px 3px 8px;
  transition: all ease .3s;
  display: inline-block;


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
  line-height: 1.5;
`

function Card({ name, background_image, path, id, dominant_color }) {
  return (
    <div>
      <CardGame style={{ backgroundColor: `#${dominant_color}` }}>
        <Link to={`${path}${id}`}>
          <Image src={background_image} height='200px' alt={name} />
          <Padding>
            <Info>


              <Name>{name}</Name>
            </Info>
          </Padding>
        </Link>
      </CardGame>
    </div>
  );
}

export default Card;
