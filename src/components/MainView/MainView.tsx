import React, {
    FunctionComponent, 
    useCallback,
}                  from 'react'
import clsx        from 'clsx'
import {
    useTheme
}                  from '@material-ui/core/styles'
import {
    AppBar,
    Drawer,
    Toolbar,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
}                  from '@material-ui/core'
import {
    Menu         as MenuIcon,
    ChevronLeft  as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
}                  from '@material-ui/icons'
import {
    RouteComponentProps
}                  from 'react-router-dom'
import {
    History
}                  from 'history'

import {
    mainViewStyles
}                  from 'src/styles/mainViewStyles'
import DrawerItems from 'src/components/MainView/DrawerItems'


interface IMainView extends RouteComponentProps {}

const pushNewPage = (history: History) => (route: string) => useCallback(() => {
    history.push(route)
}, [route])

const MainView: FunctionComponent<IMainView> = ({children, history}) => {
    const classes         = mainViewStyles()
    const theme           = useTheme();
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
                <DrawerItems onClick={pushNewPage(history)}/>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                { children }
            </main>
        </div>
    )
}


export default MainView
