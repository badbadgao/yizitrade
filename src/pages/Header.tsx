import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import AndroidIcon from '@mui/icons-material/Android';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button/Button';
import styled from '@emotion/styled';
import Badge from '@mui/material/Badge';
import { gql, useReactiveVar } from '@apollo/client';
import { cartItemsVar } from 'cache';

// export const GET_CART_ITEMS = gql`
//   query GetCartItems {
//     cartItems @client
//   }
// `;

const LoginButton = styled(Button)`
  color: white;
`;
const Header = (): JSX.Element => {
  const [auth, setAuth] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const cartItems = useReactiveVar(cartItemsVar);
  // const { data } = useQuery(GET_CART_ITEMS);

  const handleLogin = (): void => {
    setAuth((auth) => !auth);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleShoppingCart = (): void => {
    console.log('set handler shopping cart');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <AndroidIcon />
          </IconButton>
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          YTrade
        </Typography>
        {auth && (
          <Box>
            <IconButton size="large" aria-label="shopping-cart" onClick={handleShoppingCart} color="inherit">
              <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </Box>
        )}
        {!auth && (
          <Box sx={{ display: 'flex', mr: 4 }}>
            <LoginButton variant="text" onClick={handleLogin}>
              SIGN IN
            </LoginButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
