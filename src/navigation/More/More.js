import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './More.css';

export default function BasicMenu() {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleLogout = () => {
    navigate('/auth');
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReportProblem = () => {
    setOpenSnackbar(true);
    handleClose();
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className='container'>
      <button className="sidenav_button"
        onClick={handleClick}
      >
        <MenuIcon/>
        <span className='text'>More</span>
      </button>

      <Menu className='menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 
          style: {
            backgroundColor: ' rgba(0, 0, 0, 0.864)', 
            color: 'white',
            border: '2px solid grey',
            borderRadius: '10px',
            padding: '12px',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Your activity</MenuItem>
        <MenuItem onClick={handleClose}>Saved</MenuItem>
        <MenuItem onClick={handleClose}>Switch appearance</MenuItem>
        <MenuItem onClick={handleReportProblem}>Report a problem</MenuItem>
        <MenuItem onClick={handleClose}>Switch accounts</MenuItem>
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
        The Bug has been Report!
        </Alert>
      </Snackbar>
    </div>
  );
}
