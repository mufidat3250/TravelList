import React from 'react'
import './Input.css'

const Input = ({placeholder, value, onchange}) => {
  return (
    <div className='input'>
        <input type="text" value={value} onChange={onchange} placeholder={placeholder}/>
    </div>
  )
}

export default Input