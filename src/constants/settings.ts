import {
    ISensorLevelIndicator,
    IActuatorStateIndicator,
} from 'src/models/interfaces'


export const routes = {
    dashboard: 'dashboard',
    activities: 'activities',
}

export const moistureLevelIndicators: ISensorLevelIndicator[] = [
    {icon: 'swimming-pool', threshold: 1000, color: 'red', text: 'Wet'},
    {icon: 'tint-slash', threshold: 200, color: 'grey', text: 'Dry'},
    {icon: 'tint', threshold: 600, color: 'green', text: 'Optimal'},
]

export const motorStateIndicators: IActuatorStateIndicator[] = [
    {icon: 'gas-pump', value: 0, color: 'grey', text: 'OFF'},
    {icon: 'gas-pump', value: 1, color: 'green', text: 'ON'},
]

export const sensorStatsUnknown: ISensorLevelIndicator = {icon: 'question', color: 'red', text: 'Unknown', threshold: 0}

export const actuatorStatsUnknown: IActuatorStateIndicator = {icon: 'question', color: 'red', text: 'Unknown', value: 0}