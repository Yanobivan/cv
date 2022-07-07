import React from 'react';

import '../../styles/Header.scss';
import { MenuBar } from '../MenuBar/MenuBar';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { HideOnScroll, toBot } from './utils';
import { ContactMail, AccountCircle, AccountTree } from '@mui/icons-material';
import { ABOUT_ME, ABOUT_PROJECT, languages, themes, YAN_TAMASHCHUK } from './data';

const contactsHandler = () => {
  toBot();
};

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, minWidth: '300px' }}>
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <IconButton
                onClick={contactsHandler}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <ContactMail />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {YAN_TAMASHCHUK}
              </Typography>
              <Button color="inherit">
                <AccountCircle />
                {ABOUT_ME}
              </Button>
              <Button color="inherit">
                <AccountTree />
                {ABOUT_PROJECT}
              </Button>
              <MenuBar settings={languages} open={false} />
              <MenuBar settings={themes} open={false} />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
    </>
  );
};
