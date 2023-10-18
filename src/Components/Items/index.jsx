import React from 'react'
import './Item.css'
import Item from '../Item'

const Items = ({items, onDelete, onToggle}) => {
  return (
    <div className='items-wrapper'>
       <div className='items'>
       {items.map((item, index)=> 
          <Item item={item} onDelete = {onDelete} key = {index} onToggle={onToggle}/>
        )}
       </div>
      </div>
  )
}

export default Items