import { memo } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'


type listItemProps = {
  item: Object,
  onItemClick: Function,
}

const ListItemSingle = ({item, onItemClick}: listItemProps) => {
  return <ListItem button key={item.title} onClick={onItemClick}>
           <ListItemIcon>{<item.icon/>}</ListItemIcon>
           <ListItemText primary={item.title} />
         </ListItem>
}

const memoizedListItemSingle = memo<listItemProps>(ListItemSingle)


export default memoizedListItemSingle