import React, { useState } from 'react';

import { Menu } from '@mui/material';
import { Box, Button, MenuItem, MenuProps, Tooltip, Typography } from '@material-ui/core';

interface MenuBarProps extends MenuProps {
  settings: {
    values: string[];
    key: string;
  };
}

export const MenuBar: React.FC<MenuBarProps> = ({ ...props }) => {
  const menuTitle = localStorage.getItem(props.settings.key) || props.settings.values[0];
  const [name, setName] = useState(menuTitle);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (signature: string) => {
    localStorage.setItem(props.settings.key, signature);
    setName(signature);
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={name}>
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
        {props.settings.values.map((setting) => (
          <MenuItem
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
