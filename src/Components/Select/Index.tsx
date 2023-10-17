import React from 'react'
import './Select.css'

const Select = ({listOptions, onchange, value}) => {
  return (
    <div className='select'>
        <select  onChange={onchange} value={value}>
        {listOptions.map((option:number)=> <option value={option} key={option}>{option}</option>)}
        </select>
    </div>
  )
}

export default Select