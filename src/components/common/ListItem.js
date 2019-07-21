import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'


export default function({item, onItemClick}) {
  return <ListItem button key={item.title} onClick={onItemClick}>
           <ListItemIcon>{<item.icon/>}</ListItemIcon>
           <ListItemText primary={item.title} />
         </ListItem>
}