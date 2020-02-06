import { FunctionComponent }   from 'react'

import {
    Tcreated_timestamp,
    Tsensor_device_id,
    Tsensor_value,
}                              from './primitiveTypes'
import getActivitiesViewStyles from 'src/styles/activitiesViewStyles'


export interface IsensorData {
    created_timestamp: Tcreated_timestamp
    sensor_device_id: Tsensor_device_id
    sensor_value: Tsensor_value
}

export interface IStatusesDataItem {
    text: string,
    icon: FunctionComponent,
    color: keyof typeof getActivitiesViewStyles,
}
