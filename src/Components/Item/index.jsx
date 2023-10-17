import React from 'react'
import './Item.css'

const Item = ({desc,quantity, packed}) => {
    console.log(desc)
  return (
    <div className='item'>
    <input type="checkbox"/>
    <div className='disc' style={{textDecoration: packed ? 'line-through':''}}>
    <p>{quantity}</p>
    <p>{desc}</p>
    </div>
    <span>❌</span>
    </div>
  )
}

export default Item