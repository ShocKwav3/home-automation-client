import Grid from '@material-ui/core/Grid'
import _ from 'lodash'

import CardItem from '../common/CardItem'
import { activitiesViewStyles } from '../../styles/activitiesViewStyles'
import {
  getDateString,
  getTimeString,
} from '../../helpers/utils'
import StatusesContainer from '../../containers/StatusesContainer'
import React, { FunctionComponent } from 'react'


type ActivitiesViewProps = {
  sensorData: Array<Object>,
}


const ActivitiesView: FunctionComponent<ActivitiesViewProps> = ({sensorData}) => {
  const classes = activitiesViewStyles()

  return <Grid container className={classes.container} style={{backgroundColor: 'grey'}} spacing={2}>
    {
      sensorData.map((value: any, index: any) => (
        <Grid key={index} item xs={12} sm={12} md={6} lg={2} xl={2}>
          <CardItem containerStyle={classes.container}
                    title={getTimeString(value.created_timestamp)}
                    footer={getDateString(value.created_timestamp)}
                    value={value}>
              <StatusesContainer singleSensorData={value} />
          </CardItem>
        </Grid>
      ))
    }
  </Grid>
}

export default ActivitiesView