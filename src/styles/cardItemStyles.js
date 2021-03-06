import { makeStyles } from '@material-ui/core/styles'


export const cardItemStyles = makeStyles(theme => ({
  card: {
    //backgroundColor: 'red',
  },
  title: {
    fontSize: 18,
    paddingVartical: '5px'
  },
  titleContainer: {
    backgroundColor: 'red',
    width: '100%'
  },
  cardContentRoot: {
    padding: '0',
    paddingTop: '5px'
  },
  root: {
    flexGrow: 1,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 80,
  },
  icon: {
    margin: theme.spacing(2),
  },
  cardRoot: {
    paddingBottom: 0
  }
}))