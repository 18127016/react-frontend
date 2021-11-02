import { Box,AppBar,Toolbar,IconButton,Typography, Button, Menu } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CreateDialog from "./CreateDialog";
import JoinDialog from "./JoinDialog";


export const ClassroomAppBar = ({onCreate}) => {
    const [anchorEl, setAnchorEl] = useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Classroom
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleMenu}
                >
                    <AddIcon/>
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
                    sx={{marginTop:"3%", marginLeft:"-1%"}}
                >
                    <CreateDialog onClick={handleClose} onCreate={onCreate}>Create Class</CreateDialog>
                    <JoinDialog onClick={handleClose}>Join Class</JoinDialog>
                 </Menu>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}