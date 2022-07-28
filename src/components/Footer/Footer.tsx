import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';

import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../../styles/Footer.scss';
import AttentionBorder from '../../store/AttentionBorder';
import { observer } from 'mobx-react-lite';

const iconButtonStyle = {
  marginRight: '10px',
  borderRadius: '10px',
  '&:hover': {
    transition: 'background-color 0.3s ease-in-out',
    backgroundColor: 'white',
  },
};
const iconButtonTypographyStyle = { flexGrow: 1, textDecoration: 'underline' };

interface FooterProps {}

export const Footer: React.FC<FooterProps> = observer(({ ...props }) => {
  return (
    <>
      <footer className="footer">
        <Box
          className={'footer__icon-box' + `${AttentionBorder.isBorder ? ' attention-border' : ''}`}
        >
          <IconButton
            onClick={() => {}}
            edge="start"
            size="large"
            color="inherit"
            aria-label="menu"
            sx={iconButtonStyle}
            href="https://t.me/yanobivan"
            target="_blank"
          >
            <TelegramIcon fontSize="large" />
            <Typography variant="h6" component="div" sx={iconButtonTypographyStyle}>
              @yanobivan
            </Typography>
          </IconButton>
          <IconButton
            onClick={() => {}}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={iconButtonStyle}
            href="https://github.com/Yanobivan"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
            <Typography variant="h6" component="div" sx={iconButtonTypographyStyle}>
              Yanobivan
            </Typography>
          </IconButton>
          <IconButton
            onClick={() => {}}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={iconButtonStyle}
            href="https://www.linkedin.com/in/yan-tamashchuk-2aa8a5220/"
            target="_blank"
          >
            <LinkedInIcon fontSize="inherit" />
            <Typography variant="h6" component="div" sx={iconButtonTypographyStyle}>
              Tamashchuk Yan
            </Typography>
          </IconButton>
        </Box>
      </footer>
    </>
  );
});
