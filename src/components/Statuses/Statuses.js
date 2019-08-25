import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Tooltip from '@material-ui/core/Tooltip'
import clsx from 'clsx'
import { loadCSS } from 'fg-loadcss'

import { activitiesViewStyles } from '../../styles/activitiesViewStyles'


type statusesProps = {
  data: Array<Object>,
}

const Statuses = ({data}: statusesProps) => {
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const classes: Object = activitiesViewStyles()

  return <Grid container
               justify="center"
               className={classes.container}
               spacing={2}>
           {
             data.map((item: Object, index: number) =>
             <Grid item key={index}>
               <Tooltip enterDelay={150} title={item.text} placement={index%2===0 ? 'left' : 'right'}>
                 <Icon className={clsx(classes.iconBasic, `fa fa-${item.icon}`, classes[item.color])} fontSize="large" />
               </Tooltip>
             </Grid>)
           }
         </Grid>
}


export default Statuses