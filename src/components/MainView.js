import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import AppBar from '@material-ui/core/AppBar';
import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ViewList from '@material-ui/icons/ViewList';
import DashboardIcon from '@material-ui/icons/DashboardRounded';
import List from '@material-ui/core/List'

import ListItem from './common/ListItem'
import { mainViewStyles } from '../styles/mainViewStyles'
import { routes } from '../constants/settings'


const drawerOptions: Array<Object> = [
  {
    title: 'Dashboard',
    icon: DashboardIcon,
    route: routes.dashboard,
  },
  {
    title: 'Activities',
    icon: ViewList,
    route: routes.activities,
  },
]

type drawerItemsProps = {
  history: Array<Object>,
}

const DrawerItems = ({history}: drawerItemsProps) => { //since we want it to render once no optimizations are needed with lifecycle events
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

type mainViewProps = {
  children: React.Node,
  history: Array<Object>,
}

export default function MainView({children, history}: mainViewProps) {
  const classes: Object = mainViewStyles()
  const theme: Object = useTheme();
  const [open: boolean, setOpen] = useState(false);

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
        <DrawerItems history={history}/>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
