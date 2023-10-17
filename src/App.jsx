import { useState } from 'react'
import './App.css'
import Input from './Components/Inputs'
import Select from './Components/Select/Index'
import Item from './Components/Item'
import NavBar from './Components/NavBar'

function App() {
  const [description, setDescription] = useState('')
  const [quantity, setQuatity] = useState('')
  const [packed, setPacked] = useState(false)
  const [items, setItems] = useState([])

  const handleChange = (e) => {
      setDescription(e.target.value)
  }
  const handleSubmit = () =>{
    const newitems = {description, quantity, packed}
    setItems([...items, newitems])
  }


  const listOptions = Array.from({length:20}, (v, i) =>  i + 1)
  return (
    <div className='App'>
        <NavBar/>
      <div className='sub-head'>
          <p>What do you need for your trip 😢</p>
          <div style={{width:'fit-content'}}>
          <Select listOptions ={listOptions} value={quantity} onchange={(e)=> setQuatity(e.target.value)}/>
          </div>
          <div className='' style={{width:'20%'}}>
          <Input placeholder={'items'} onchange={handleChange} value = {description}/>
            </div>   
            <button onClick={handleSubmit}> Add</button>  
      </div>
      <div className='items-wrapper'>
       <div className='items'>
       {items.map((item, index)=> 
          <Item desc={item.description} key={index} quantity={item.quantity} packed= {item.packed}/>
        )}
       </div>
      </div>
      <div className='footer'>
        
      </div>
    </div>
  )
}

export default App
