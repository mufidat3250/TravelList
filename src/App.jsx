import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Form from './Components/Form'
import Items from './Components/Items'
import Footer from './Components/Footer'

function App() {
  const [items, setItems] = useState([])
  const handleAddItem = (item) => {
    setItems((items)=> [...items, item])
  }
  const handleDelete = (id) => {
    setItems((items)=> items.filter((item)=> item.id !== id))
  }
  const handleToggle = (id) => {
    setItems((items)=> items.map((item)=> item.id === id ? {...item, packed:!item.packed}: item))
  }
  return (
    <div className='App'>
      <NavBar/>
      <Form  onAddItem={handleAddItem}/>
      <Items items={items} onDelete = {handleDelete}  onToggle = {handleToggle}/>
      <Footer items= {items}/>
    </div>
  )
}

export default App
