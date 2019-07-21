import React, { useCallback } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LocalActivity from '@material-ui/icons/LocalActivity';
import ViewList from '@material-ui/icons/ViewList';
import DashboardIcon from '@material-ui/icons/DashboardRounded';
import List from '@material-ui/core/List'

import ListItem from './common/ListItem'
import styles from '../styles'


const drawerOptions = [
  {
    title: 'Dashboard',
    icon: DashboardIcon,
    route: 'dashboard',
  },
  {
    title: 'Sensor data',
    icon: ViewList,
    route: 'sensorData',
  },
  {
    title: 'Actuator activities',
    icon: LocalActivity,
    route: 'actuatorActivities',
  },
]

export default function MainView({allState, children, history}) {
  const classes = styles.mainStyles()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const DrawerItems = () => {
    return <List>
      {
        drawerOptions.map(drawerItem => {
          const route = drawerItem.route
          const onDrawerItemClick = useCallback(() => {
            history.push(route)
          }, [route])

          return <ListItem key={drawerItem.route}
                           item={drawerItem}
                           onItemClick={onDrawerItemClick} />
        })
      }
    </List>
  }

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
        <DrawerItems />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
