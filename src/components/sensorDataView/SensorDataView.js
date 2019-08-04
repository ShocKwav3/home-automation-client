import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import clsx from 'clsx'
import { loadCSS } from 'fg-loadcss'
import _ from 'lodash'

import CardItem from '../common/CardItem'
import { sensorDataViewStyles } from '../../styles/sensorDataViewStyles'


const Statuses = ({moistureValue}) => {
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const classes = sensorDataViewStyles()
  const moistureLevelIndicators = [
    {icon: 'swimming-pool', threshold: 800, color: 'red'},
    {icon: 'tint-slash', threshold: 270, color: 'grey'},
    {icon: 'tint', threshold: 550, color: 'green'},
  ]
  const moistureLevelIndicatorsOrdered = _.orderBy(moistureLevelIndicators, ['threshold'], ['asc'])
  const {icon: moistureLevelIcon, color: iconColor} = _.find(moistureLevelIndicatorsOrdered, level => level.threshold >= moistureValue)
const pump = 'gas-pump'
  return <Grid container className={classes.container} spacing={2}>
           <Grid item>
             <Icon className={clsx(classes.iconBasic, `fa fa-${pump}`)} fontSize="large" />
           </Grid>
           <Grid item>
             <Icon className={clsx(classes.iconBasic, `fa fa-${moistureLevelIcon}`, classes[iconColor])} fontSize="large" />
           </Grid>
         </Grid>
}

export default function sensorDataView() {
  const classes = sensorDataViewStyles()

  return <Grid container className={classes.container} spacing={2}>
    {[350, 200, 400, 210, 230, 300, 330, 410, 430, 800].map(value => (
      <Grid key={value} item>
        <CardItem containerStyle={classes.cardContainer} title='Paperiiii' value={value}>
          <Statuses moistureValue={value} />
        </CardItem>
      </Grid>
    ))}
  </Grid>
}