import React, { FunctionComponent } from 'react'
import { Grid } 					from '@material-ui/core'
import _ 							from 'lodash'

import CardItem 					from 'src/components/common/CardItem'
import getActivitiesViewStyles 		from 'src/styles/activitiesViewStyles'
import {
	getDateString,
	getTimeString
} 									from 'src/helpers/utils'
import StatusesContainer 			from 'src/containers/StatusesContainer'

import { ISensorData } 				from 'src/models/interfaces'		


interface IActivitiesViewProps {
  	sensorData: ISensorData[],
}

interface IactivitiesViewStyles {
	container: string,
	iconBasic: string,
	green: string,
	red: string,
	grey: string,
}

const ActivitiesView: FunctionComponent<IActivitiesViewProps> = ({sensorData}) => {
  	const activitiesViewStyles: IactivitiesViewStyles = getActivitiesViewStyles()

  	return (
		<Grid container className={activitiesViewStyles.container} style={{backgroundColor: 'grey'}} spacing={2}>
			{
				sensorData.map((value, index) => (
					<Grid key={index} item xs={12} sm={12} md={6} lg={2} xl={2}>
						<CardItem containerStyle={activitiesViewStyles.container}
								  title={getTimeString(value.created_timestamp)}
								  footer={getDateString(value.created_timestamp)}>
							<StatusesContainer singleSensorData={value} />
						</CardItem>
					</Grid>
				))
			}
		</Grid>
	)
}


export default ActivitiesView
