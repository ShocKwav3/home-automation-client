import { FunctionComponent }   from 'react'

import {
    Tcreated_timestamp,
    Tsensor_device_id,
    Tsensor_value,
    Tactuator_device_id,
    Tactuator_value,
}                              from './primitiveTypes'
import getActivitiesViewStyles from 'src/styles/activitiesViewStyles'


export interface IGetActivitiesViewStyles {
    container: Object,
	iconBasic: Object,
	green: Object,
	red: Object,
	grey: Object,
}

export interface ISensorData {
    created_timestamp: Tcreated_timestamp
    sensor_device_id: Tsensor_device_id
    sensor_value: Tsensor_value
}

export interface IStatusesDataItem {
    text: string,
    icon: string,
    color: keyof IGetActivitiesViewStyles,
    value?: number,
    threshold?: number,
}

export interface IActuatorActivity {
    created_timestamp: Tcreated_timestamp,
    actuator_value: Tactuator_value,
    actuator_device_id: Tactuator_device_id,
    sensor_device_id: Tsensor_device_id,
}

export interface ISensorLevelIndicator {
    icon: string,
    threshold: number,
    color: keyof IGetActivitiesViewStyles,
    text: string,
}

export interface IActuatorStateIndicator {
    icon: string,
    value: number,
    color: keyof IGetActivitiesViewStyles,
    text: string,
}
