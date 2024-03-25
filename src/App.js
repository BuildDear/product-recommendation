import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './components/Header/Header';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Settings } from './pages/Settings/Settings';
import { Recommend } from './pages/Recommend/Recommend';

export function App() {

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Container maxWidth='xl'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='settings' element={<Settings />} />
            <Route path='recommend' element={<Recommend />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

