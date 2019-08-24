export const getDateString = (date) => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return new Date(date).toLocaleDateString('en-US', options)
}

export const getTimeString = (date) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  return new Date(date).toLocaleDateString('en-US', options).split(', ')[1]
}