import React from 'react'
import './footer.css'

const Footer = ({items}) => {
  if(!items.length) return <p className='footer'>Start adding some items to your packing list</p>

  const numItems = items.length
  const packedItems = items.filter((item)=> item.packed=== true).length
  const packecPercent = Number(packedItems/numItems * 100)

  return (
    <div className='footer'>
      You have {numItems} items on your list and you already packed {packedItems}({packecPercent}%)
    </div>
  )
}

export default Footer