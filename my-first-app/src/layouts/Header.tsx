import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/material/MenuItem';
import { Link } from "react-router-dom";


const pages = [
    {
        id: 234355635263,
        name: 'Products',
        path: "/products"
    },
    {
        id: 23553756737,
        name: 'Users',
        path: "/users"
    },
    {
        id: 2367265356273,
        name: 'Todos',
        path: "/todos"
    },
    {
        id: 26367326723,
        name: 'Netflix',
        path: "/netflix"
    },
    {
        id: 236326732678,
        name: 'About',
        path: "/about"
    }
];

const Header = () => {

    /*  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
     const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
 
     const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
         setAnchorElNav(event.currentTarget);
     };
     const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
         setAnchorElUser(event.currentTarget);
     };
 
     const handleCloseNavMenu = () => {
         setAnchorElNav(null);
     };
 
     const handleCloseUserMenu = () => {
         setAnchorElUser(null);
     }; */

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
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
                        TAMIL REACT APP
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            //onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {pages.map((page) => (
                            <MenuItem key={page.id}
                            >
                                <Link to={page.path}>
                                    <Typography sx={{ textAlign: 'center' }}>
                                        {page.name}
                                    </Typography>
                                </Link>


                            </MenuItem>
                        ))}
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
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
                        TAMIL REACT APP
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <MenuItem key={page.id} >
                                <Link to={page.path}>
                                    <Typography sx={{ textAlign: 'center' }}>
                                        {page.name}
                                    </Typography>
                                </Link>


                            </MenuItem>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Header;