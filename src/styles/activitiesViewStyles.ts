import {
	makeStyles,
	Theme,
} from '@material-ui/core/styles'


export default makeStyles((theme: Theme) => ({
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
}))
