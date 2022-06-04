import React from 'react';

import '../styles/normalize.css';
import '../styles/header.scss';

import { useScrollTrigger, AppBar, Menu } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { AccountCircle, AccountTree, ContactMail } from '@mui/icons-material';
import { Slide } from '@material-ui/core';
import MenuBar from './MenuBar';

const settings = ['RU', 'ENG'];
const languageName = 'ENG';
const themeName = 'THEME';
const theme = ['primary', 'black', 'red'];

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, minWidth: '300px' }}>
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <ContactMail />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Yan Tamashchuk
              </Typography>
              <Button color="inherit">
                <AccountCircle />
                About me
              </Button>
              <Button color="inherit">
                <AccountTree />
                About project
              </Button>
              <MenuBar settings={settings} signature={languageName} />
              <MenuBar settings={theme} signature={themeName} />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
    </>
  );
};

export default Header;
