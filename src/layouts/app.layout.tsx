import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as classes from './app.layout.styles';
import { List, ListItem, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { headerRoot, linkHeader } from './app.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className={headerRoot}>
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton>
          <List>
            <ListItem disablePadding>
              <ListItemButton >
                <Link to="/characters" className={linkHeader}>Personajes</Link>
              </ListItemButton>
              <ListItemButton>
                <Link to="/locations" className={linkHeader}>Lugares</Link>
              </ListItemButton>
              <ListItemButton>
                <Link to="/episodes" className={linkHeader}>Episodios</Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
