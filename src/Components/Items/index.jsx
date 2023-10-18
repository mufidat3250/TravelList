import React from 'react'
import './Item.css'
import Item from '../Item'

const Items = ({items, onDelete, onToggle, onClearList}) => {
  return (
    <div className='items-wrapper'>
       <div className='items'>
       {items.map((item, index)=> 
          <Item item={item} onDelete = {onDelete} key = {index} onToggle={onToggle}/>
        )}
       </div>
       <button onClick={onClearList}>Clear List</button>
      </div>
  )
}

export default Items