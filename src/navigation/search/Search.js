import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ 
        width: 380,
        height: 1000,
        bgcolor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow:'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <Typography  variant="h4" component="div" gutterBottom>
        Search
      </Typography>
      <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', bgcolor: 'grey', width: '80%', margin: '0 auto', borderRadius: '10px' }}>
        <SearchIcon sx={{ color: 'black' }} />
        <InputBase
          sx={{ ml:1, flex: 1}}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Typography variant="h6" component="div" gutterBottom>
        No Suggested Search
      </Typography>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <button onClick={toggleDrawer('left', true)} className="sidenav_button">
          <SearchIcon />
          <span className='text'>Search</span>
        </button>

        <Drawer
          anchor='left'
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
