import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';   
import Box from '@mui/material/Box';
import * as React from 'react';
import Avatar from './login'
import Search from './search'


export default function header()
{   
    return(   
        <AppBar>
          <Toolbar sx={{display: 'flex'}}>
            <Box sx={{ width:'60%', marginLeft:'20px'}}>
              <Search />
            </Box>
            <Box sx={{width:'40%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                  <Avatar />
            </Box>
          </Toolbar>
        </AppBar>
    )
}