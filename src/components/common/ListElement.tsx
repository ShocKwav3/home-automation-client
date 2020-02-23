import React, { FunctionComponent } from 'react'
import {
    ListItem,
    ListItemIcon,
    ListItemText,
}                                   from '@material-ui/core'

import { Tfunction }                from 'src/models/primitiveTypes'


interface IListElement {
    item: {
        title: string,
        icon: FunctionComponent,
    },
    onItemClick: Tfunction,
}

const ListElement: FunctionComponent<IListElement> = React.memo(({item, onItemClick}) => {
    return (
        <ListItem button key={item.title} onClick={onItemClick}>
            <ListItemIcon>
                { <item.icon/> }
            </ListItemIcon>
            <ListItemText primary={item.title} />
        </ListItem>
    )
})


export default ListElement
