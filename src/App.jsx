import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import Form from './components/Form';
import SqlOutput from './components/SqlOutput';

import { CssBaseline } from '@material-ui/core';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default function App() {
  const [columnData, setColumnData] = useState({});
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Form setColumnData={setColumnData} />
      <SqlOutput columnData={columnData} />
      <CssBaseline />
    </ThemeProvider>
  );
}
