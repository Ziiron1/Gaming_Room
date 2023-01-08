import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import SideBarMenu from './components/global/SideBarMenu';
import styled from 'styled-components';
import Page404 from '../src/pages/Page404';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <SideBarMenu title='Plataformas' />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='*' element={<Page404 />} />
          <Route path="games/:query" element={<GamePage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
