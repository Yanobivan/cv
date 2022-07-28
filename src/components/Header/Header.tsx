import React, { useState } from 'react';
import '../../styles/Header.scss';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { ContactMail, AccountCircle, AccountTree } from '@mui/icons-material';

import { MenuBar } from '../MenuBar/MenuBar';
import { ABOUT_ME, ABOUT_PROJECT, languages, themes, YAN_TAMASHCHUK } from './data';
import { HideOnScroll, toBottom } from './utils';
import { Modal } from '../Modal/Modal';
import AttentionBorder from '../../store/AttentionBorder';

interface HeaderProps {
  disabledHideOnScroll?: boolean;
}

const contactsHandler = () => {
  toBottom();
  AttentionBorder.AttentionBorder();
};

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const { disabledHideOnScroll = false } = props;
  const [isAboutMeModal, setAboutMeModal] = useState<boolean>(false);

  return (
    <>
      <Box>
        <HideOnScroll disabled={disabledHideOnScroll}>
          <AppBar className="header__bar scrollbar-width">
            <Toolbar>
              <Box className="header__box">
                <Button color="inherit" onClick={contactsHandler}>
                  <ContactMail className="header__icon" />
                  <Typography>{YAN_TAMASHCHUK}</Typography>
                </Button>
                <Box className="info-box">
                  <Button color="inherit" onClick={() => setAboutMeModal(true)}>
                    <AccountCircle className="header__icon" />
                    <Typography>{ABOUT_ME}</Typography>
                  </Button>
                  <Button color="inherit">
                    <AccountTree className="header__icon" />
                    <Typography>{ABOUT_PROJECT}</Typography>
                  </Button>
                  <MenuBar settings={languages} open={false} />
                  <MenuBar settings={themes} open={false} />
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Modal active={isAboutMeModal} setActive={setAboutMeModal}>
          <div>SAKFkmsd</div>
          <div>SAKFkmsd</div>
          <div>SAKFkmsd</div>
          <div>SAKFkmsd</div>
        </Modal>
      </Box>
    </>
  );
};
