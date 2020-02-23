import React, { FunctionComponent } from 'react'
import {
    Grid,
    Icon,
    Tooltip,
}                                   from '@material-ui/core'
import clsx                         from 'clsx'
import { loadCSS }                  from 'fg-loadcss'

import getActivitiesViewStyles      from 'src/styles/activitiesViewStyles'

import { IStatusesDataItem }        from 'src/models/interfaces'


interface IStatusesProps {
    data: IStatusesDataItem[],
}

interface IactivitiesViewStyles {
	container: string,
	iconBasic: string,
	green: string,
	red: string,
	grey: string,
}

const determinePlacement = (itemIndex: number) => itemIndex%2===0 ? 'left' : 'right'

const Statuses: FunctionComponent<IStatusesProps> = ({data}) => {
    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    const classes: IactivitiesViewStyles = getActivitiesViewStyles()

    return (
        <Grid container justify="center" className={classes.container} spacing={2}>
            {
                data.map((item, index) =>
                    <Grid item key={index}>
                        <Tooltip enterDelay={150} title={item.text} placement={determinePlacement(index)}>
                            <Icon className={clsx(classes.iconBasic, `fa fa-${item.icon}`, classes[item.color])} fontSize="large" />
                        </Tooltip>
                    </Grid>
                )
            }
        </Grid>
    )
}


export default Statuses
