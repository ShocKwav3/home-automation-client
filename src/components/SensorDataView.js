import Grid from '@material-ui/core/Grid'

import CardItem from './common/CardItem'
import { sensorDataViewStyles } from '../styles/sensorDataViewStyles'


export default function sensorDataView() {
  const classes = sensorDataViewStyles()

  return <Grid container className={classes.container} spacing={2}>
    {[350, 200, 400, 200, 230, 300, 330, 400, 430].map(value => (
      <Grid key={value} item xs={12} sm={6} md={4} lg={4}>
        <CardItem containerStyle={classes.cardContainer} title='Paperiiii' value={value}/>
      </Grid>
    ))}
  </Grid>
}