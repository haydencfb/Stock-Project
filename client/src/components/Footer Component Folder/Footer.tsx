// React Hook Imports
import * as React from 'react';
import { Link } from "react-router-dom";

// MUI Material Imports
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// MUI Icon Imports
import GitHubIcon from '@mui/icons-material/GitHub';
import SlideshowIcon from '@mui/icons-material/Slideshow';

// CSS Imports
import classes from '../Footer Component Folder/footer.module.css';

export default function Footer() {

  const [value, setValue] = React.useState(0);

  return (
    <footer>
        <BottomNavigation
          sx={{ backgroundColor: 'var(--primary-grey)', position: 'fixed', bottom: '0', width: '100%' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Repository" icon={<GitHubIcon />} />
          <BottomNavigationAction label="Powerpoint" icon={<SlideshowIcon />} />          
        </BottomNavigation>
    </footer>
  );
}

