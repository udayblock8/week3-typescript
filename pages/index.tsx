import type { NextPage } from 'next'
import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import data from '../public/navbar.json';
import Divider from '@mui/material/Divider';
import MenuItems from '../components/menuitems';
import Logo from '../components/logo';
import theme from '../styles/theme';
import Header from '../components/header'
import Grid from '../components/grid'

const Home: NextPage = () => {
  const drawerWidth= 240

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header/>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor:"#F1F2F7",
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Logo/>
          <Divider/>

          {data.map((section) => (
            <MenuItems key={section.id} section={section}/>
          ))}
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', padding:"44px 44px 0px 44px" }}
        >
          <Toolbar />
          <Box sx={{marginBottom:'40px'}}>
            <Typography variant="dashboard">Dashboard</Typography>
          </Box>
          <Grid />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Home
