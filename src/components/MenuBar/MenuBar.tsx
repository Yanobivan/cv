import React, { useState } from 'react';

import { Menu } from '@mui/material';
import { Box, Button, MenuItem, MenuProps, Tooltip, Typography } from '@material-ui/core';

import '../../styles/MenuBar.scss';

interface MenuBarProps extends MenuProps {
  settings: {
    values: string[];
    key: string;
    name: string;
  };
}

export const MenuBar: React.FC<MenuBarProps> = ({ ...props }) => {
  const { settings } = props;

  const menuTitle = localStorage.getItem(settings.key) || settings.values[0];
  const [name, setName] = useState<string>(menuTitle);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (signature: string) => {
    localStorage.setItem(settings.key, signature);
    setName(signature);
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={settings.name}>
        <Button color="inherit" onClick={handleOpenUserMenu}>
          {name}
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={() => {
          handleCloseUserMenu(name);
        }}
      >
        {settings.values.map((setting) => (
          <MenuItem
            className="menu__item"
            key={setting}
            onClick={() => {
              handleCloseUserMenu(setting);
            }}
          >
            <Typography align="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
