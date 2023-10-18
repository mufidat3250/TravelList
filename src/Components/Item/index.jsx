import React from 'react'
import './Item.css'

const Item = ({item, onDelete, onToggle}) => {
  console.log(item)
  const {quantity, description, packed, id} = item
  return (
    <div className='item'>
    <input type="checkbox" onChange={()=>onToggle(id)}/>
    <div className='disc' style={{textDecoration: packed ? 'line-through':''}}>
    <p>{quantity}</p>
    <p>{description}</p>
    </div>
    <span onClick={()=> onDelete(id)}>❌</span>
    </div>
  )
}

export default Item