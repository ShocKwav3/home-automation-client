export const routes: Object = {
  dashboard: 'dashboard',
  activities: 'activities',
}

export const moistureLevelIndicators: Array<Object> = [
  {icon: 'swimming-pool', threshold: 1000, color: 'red', text: 'Wet'},
  {icon: 'tint-slash', threshold: 200, color: 'grey', text: 'Dry'},
  {icon: 'tint', threshold: 600, color: 'green', text: 'Optimal'},
]

export const motorStateIndicators: Array<Object> = [
  {icon: 'gas-pump', value: 0, color: 'grey', text: 'OFF'},
  {icon: 'gas-pump', value: 1, color: 'green', text: 'ON'},
]