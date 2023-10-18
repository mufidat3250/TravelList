import { useState } from 'react'
import React from 'react'
import Select from '../Select/Index'
import Input from '../Inputs'

const Form = ({onAddItem}) => {
  const [description, setDescription] = useState('')
  const [quantity, setQuatity] = useState('')
  const [packed, setPacked] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        let newitems = {description, quantity, packed, id: Date.now()}
        onAddItem(newitems)
        
      }
    const handleChange = (e) => {
        setDescription(e.target.value)
    }
  const listOptions = Array.from({length:20}, (v, i) =>  i + 1)

  return (
    <form className='sub-head' onSubmit={handleSubmit}>
          <p>What do you need for your trip 😢</p>
          <div style={{width:'fit-content'}}>
          <Select listOptions ={listOptions} value={quantity} onchange={(e)=> setQuatity(Number(e.target.value))}/>
          </div>
          <div className='' style={{width:'20%'}}>
          <Input placeholder={'items'} onchange={handleChange} value = {description}/>
            </div>   
            <button type='submit'> Add</button>  
      </form>
  )
}

export default Form