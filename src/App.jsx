import { useState } from "react";
import "./App.css";
// import NavBar from './Components/NavBar'
// import Form from './Components/Form'
import Items from "./Components/Items";
// import Footer from './Components/Footer'
import Select, { SelectObject } from "./Components/Select/Index";
import Input from "./Components/Inputs/index";

const sortOption = [
  { value: "input", description: "sort by packed input" },
  { value: "quantity", description: "sort by quantity" },
  { value: "description", description: "sort by Description" },
];

function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (packed) => {
    setItems((items) =>
      items.map((item) =>
        item.packed === packed ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="App">
      <NavBar />
      <Form onAddItem={handleAddItem} />
      <PackList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggleItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;

export const NavBar = () => {
  return <header className="header"> 🌴 Far Away 👜</header>;
};

export const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [packed, setPacked] = useState(false);
  const listOption = Array.from({ length: 20 }, (_, i) => i + 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed, id: Date.now() };
    onAddItem(newItem);
  };

  return (
    <form className="sub-head" onSubmit={handleSubmit}>
      <p>What do you need for your trip?</p>
      <div style={{ width: "fit-content" }}>
        <Select
          listOptions={listOption}
          value={quantity}
          onchange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <div style={{ width: "10rem" }}>
        <Input
          value={description}
          onchange={(e) => setDescription(e.target.value)}
          placeholder="item..."
        />
      </div>
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
};
export const PackList = ({ items, onDelete, onToggle }) => {
  const [sortBy, setSortBy] = useState('input')
  let sortedItem = null 
  if(sortBy === 'input'){
    sortedItem = items
  }
  if((sortBy === 'quantity')) sortedItem = items.sort((a,b)=> a.quantity - b.quantity)
  if(sortBy === 'description') sortedItem = items.sort((a,b)=> a.description<(b.description)? -1 : a.description > b.description ? 1 : 0)

  return (
    <div className="items-wrapper">
      <div className="items">
        <div className="packed-list">
          {items.map((item, index) => (
            <Item
              item={item}
              key={index}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </div>
        <div className="stats-wrapper">
          <Stats  items={items} onSortBy = {setSortBy} sortBy={sortBy}/>
        </div>
      </div>
    </div>
  );
};

export const Stats = ({sortBy,onSortBy}) => {

  return (
    <div className="stats">
      <SelectObject
        options={sortOption}
        value={sortBy}
        onChange={(e) => onSortBy(e.target.value)}
      />
    </div>
  );
};

export const Footer = ({ items }) => {
  if (!items.length)
    return (
      <p className="footer"> Start adding some item to your packing list </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const perPackedItem = Math.floor((packedItems / numItems) * 100);

  return (
    <div className="footer">
      <p>
        👜 You have {numItems} items on your list, and you already packed{" "}
        {packedItems} ({perPackedItem})%
      </p>
    </div>
  );
};

export const Item = ({ item, onDelete, onToggle }) => {
  const { description, packed, quantity, id } = item;
  return (
    <div className="item">
      <div style={{ width: "fit-content" }}>
        <Input
          type={"checkbox"}
          value={packed}
          onchange={() => onToggle(packed)}
        />
      </div>
      <div style={{ textDecoration: packed ? "line-through" : "" }}>
        <span>{quantity}</span>
        <span>{description}</span>
      </div>
      <span onClick={() => onDelete(id)}>❌</span>
    </div>
  );
};
