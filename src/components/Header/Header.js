import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';


export const Header = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false);

    // Function to open and close the drawer
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    // Rendering lists in the drawer
    const renderList = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem button>
                    <SettingsIcon />
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
            <Divider />
        </Box>
    );

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link to='/'>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Movies recommendation
                        </Typography>
                    </Link>

                    <Link to='settings'>
                        <Button color="inherit">Settings</Button>
                    </Link>

                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {renderList()}
            </Drawer>
        </Box>
    );
}

