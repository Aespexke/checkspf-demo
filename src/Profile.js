import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { AccountCircle } from '@material-ui/icons';
import { Menu as MenuIcon } from '@material-ui/icons'
import './App.css';
import { Button } from '@material-ui/core';
import { BrowserRouter, Route, Router, Link} from 'react-router-dom';
import reactDom, {render} from 'react-dom';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('user'));


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = " https://Aespexke.github.io/checkspf-demo/#/";
  }

  /*const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };*/


  return (
    <div className={classes.root}>

      

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-aria-haspopup="true"
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
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
      <Route>
      
      <div class>
        <ul class="flex-container">
          <li class="flex-item"><Button href="https://drive.google.com/drive/folders/1f6qUvIU6r8j1eKhPyMh53PBc0V3VhoDv?usp=sharing">ถังดับเพลิง</Button></li>
          <li class="flex-item"><Button href="https://docs.google.com/spreadsheets/d/1NbcvW6HSECEvWN7a1P4bf3Mna-_JEE8gUSosR6LSmKM/edit?usp=sharing" >Smoke Detector</Button></li>
          <li class="flex-item"><Button href="https://docs.google.com/spreadsheets/d/15CCa8k8yhh_8JkBLXp0oC8AOu1rULdSzPXxStq89-28/edit?usp=sharing" >ไฟฉุกเฉิน</Button></li>
          <li class="flex-item"><Button href="https://docs.google.com/spreadsheets/d/13C6Tno4UgH6anlBqSH7fGFpEC3oqYwnUU74mJn-T6qE/edit?usp=sharing" >Heat Detector</Button></li>
          <li class="flex-item"><Button href="https://docs.google.com/spreadsheets/d/1vhj2aK3YGCxdIWu4JhRZwoQuf9nLlSFTXdA_-B2YpXU/edit?usp=sharing" >ชุดชำระล้างฉุกเฉิน</Button></li>
          <li class="flex-item"><Button href="#" >เครื่องสูบน้ำ</Button></li>
          <li class="flex-item"><Button href="https://drive.google.com/drive/folders/1pZeNdxZnwaNagYK4yv3Ry0yLh0a6AVG1?usp=sharing">ตรวจสอบการปฏิบัติงานประจำเดือน</Button></li>
          <li class="flex-item"><Button href="https://drive.google.com/drive/folders/1lyDh8Ii3i9_3Vg9AY7xs36JHgdN-4n0L?usp=sharing" >ประตูทางเข้า-ออกฉุกเฉิน</Button></li>
        </ul>
      </div>
      </Route>
    </div>
    
  );
}

