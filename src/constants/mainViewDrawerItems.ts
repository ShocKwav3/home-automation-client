import {
    ViewList as ViewListIcon,
    Dashboard as DashboardIcon,
} from '@material-ui/icons'
import {
    routes
} from 'src/constants/settings'


export const drawerOptions = [
    {
      title: 'Dashboard',
      icon: DashboardIcon,
      route: routes.dashboard,
    },
    {
      title: 'Activities',
      icon: ViewListIcon,
      route: routes.activities,
    },
]
