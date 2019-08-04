import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'


export default React.memo(({item, onItemClick}) => {
  return <ListItem button key={item.title} onClick={onItemClick}>
           <ListItemIcon>{<item.icon/>}</ListItemIcon>
           <ListItemText primary={item.title} />
         </ListItem>
})