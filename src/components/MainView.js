import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalActivity from '@material-ui/icons/LocalActivity';
import ViewList from '@material-ui/icons/ViewList';
import DashboardIcon from '@material-ui/icons/DashboardRounded';

import styles from '../styles'


const drawerOptions = [
  {
    title: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    title: 'Sensor data',
    icon: ViewList,
  },
  {
    title: 'Actuator activities',
    icon: LocalActivity,
  },
]

export default function MiniDrawer({allState, children}) {
  const classes = styles.mainStyles()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function toggleDrawer() {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}>
        <Toolbar>
          <IconButton color="inherit"
                      aria-label="Open drawer"
                      onClick={toggleDrawer}
                      edge="start"
                      className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                      })}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Home Automation
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
              open={open}>
        <div className={classes.toolbar}>
          <IconButton onClick={toggleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            drawerOptions.map(drawerItem => (
              <ListItem button key={drawerItem.title}>
                <ListItemIcon>{<drawerItem.icon/>}</ListItemIcon>
                <ListItemText primary={drawerItem.title} />
              </ListItem>
            ))
          }
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
