import { makeStyles } from '@material-ui/core/styles'


export const sensorDataViewStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
  },
  iconBasic: {
    margin: theme.spacing(2),
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  grey: {
    color: 'grey',
  },
}));