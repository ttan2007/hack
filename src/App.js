import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Link from '@mui/material/Link';
import Page3 from './pages/page3';

const buttonStyle = {
  my: 2,
  color: 'white', 
  display: 'block' 
}

function App() {
  return (
    <>
      <AppBar position="static" className="navigation_bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' }}}>
            <Link href="/">
              <Button 
                sx={buttonStyle}
              >
                Page 1
              </Button>
            </Link>
            <Link href="/page2">
              <Button
                sx={buttonStyle}
              >
                Page 2
              </Button>
            </Link>
            <Link href="/page3">
              <Button
                sx={buttonStyle}
              >
                Page 3
              </Button>
            </Link>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
