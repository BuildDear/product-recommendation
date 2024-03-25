import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {Settings} from './pages/Settings/Settings';

export function App() {

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

