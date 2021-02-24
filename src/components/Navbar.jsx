import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
function Navbar() {
  return (
    <AppBar position="static" style={{ alignItems: 'center' }}>
      <Toolbar>
        <Typography variant="h6" className="">
          DB2 Table Generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
