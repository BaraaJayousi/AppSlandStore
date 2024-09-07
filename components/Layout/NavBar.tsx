'use client';
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Tooltip, Stack, Link} from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuIcon from '@mui/icons-material/Menu';
import Person4Icon from '@mui/icons-material/Person4';
import React from "react";
import { signoutAction } from "@/actions/auth";

const pages = [
  {'label': "Products", 'link': '/products'}
];
const settings: {label:string, link:string}[] = [
  // {'label': 'cart', 'link':'/cart'}
];

const NavBar = () =>{

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  return(
      <AppBar position="static"
        sx={{
          mb:2.5,
        }}
        >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StorefrontIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href='/products'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              StoreSLand
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} >
                    <Link href={page.link} underline="none" color='inherit'>
                      <Typography  sx={{ textAlign: 'center' }}>{page.label}</Typography> 
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <StorefrontIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/products"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              StoreSLand
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={page.link}
                >
                  {page.label}  
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Stack 
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "center",
                }}>
                <Typography sx={{display:{xs:'none', md:'flex'}}}>
                  Welcome, Jone Doe
                </Typography>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Person4Icon fontSize="large"/>
                  </IconButton>
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
                  onClose={handleCloseUserMenu}
                >
                  <Typography color="primary" sx={{p:1.5, display:{sx:'flex', md:'none'}}}>Welcome, John Doe</Typography>
                  <form action={signoutAction}>
                    <MenuItem >
                      <Button type='submit'>Log out</Button>
                    </MenuItem>
                  </form>
                  {settings.map((setting) => (
                    <MenuItem key={setting.label} >
                      <Link href={setting.link} underline="none" color='inherit'>
                        <Typography sx={{ textAlign: 'center' }}>{setting.label}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default NavBar;