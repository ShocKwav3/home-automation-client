import React, {
    FunctionComponent,
}                              from 'react'
import { List }                from '@material-ui/core'
import ListElement             from 'src/components/common/ListElement'
import { drawerOptions }       from 'src/constants/mainViewDrawerItems'
import { Tfunction }           from 'src/models/primitiveTypes'


interface IDrawerItems {
    onClick: (route: string) => Tfunction
}

const DrawerItems: FunctionComponent<IDrawerItems> = ({onClick}) => { //since we want it to render once no optimizations are needed with lifecycle events
    return (
        <List>
            {
                drawerOptions.map(drawerItem => {
                    const route = drawerItem.route
                    const onDrawerItemClick = onClick(route)

                    return (
                        <ListElement key={drawerItem.route}
                                     item={drawerItem}
                                     onItemClick={onDrawerItemClick} />
                    )
                })
            }
        </List>
    )
}


export default DrawerItems
