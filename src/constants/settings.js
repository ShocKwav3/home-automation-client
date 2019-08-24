export const routes = {
  dashboard: 'dashboard',
  activities: 'activities',
}

export const moistureLevelIndicators = [
  {icon: 'swimming-pool', threshold: 1000, color: 'red', text: 'Wet'},
  {icon: 'tint-slash', threshold: 200, color: 'grey', text: 'Dry'},
  {icon: 'tint', threshold: 600, color: 'green', text: 'Optimal'},
]

export const motorStateIndicators = [
  {icon: 'gas-pump', value: 0, color: 'grey', text: 'OFF'},
  {icon: 'gas-pump', value: 1, color: 'green', text: 'ON'},
]