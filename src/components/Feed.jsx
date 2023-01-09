import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0px 20px;
  gap: 24px;
`;

const Title = styled.h1`
  grid-column: 1 / -1;
`

function Feed({ data, path, title, gamesData }) {

  return (
    <Container className="comeFromLeft">
      <Title>{title}</Title>
      {data && data.results.map((game) => <Card key={game.id} path={path} {...game} gamesData={gamesData} />)}

    </Container>
  );
}

export default Feed;
