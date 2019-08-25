export const getDateString = (date: Date): string => {
  const options: Object = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return new Date(date).toLocaleDateString('en-US', options)
}

export const getTimeString = (date: Date): string => {
  const options: Object = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  return new Date(date).toLocaleDateString('en-US', options).split(', ')[1]
}