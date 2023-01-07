import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {GrAdd} from 'react-icons/gr';
import {RiDeleteBin7Line} from 'react-icons/ri';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(){
    const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem,
    }
    setItems(oldList => [...oldList, item]);
    setNewItem("");

  }

  function delteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="container">
      <h1 className='heading'>Todo App</h1>
      <h2 className='heading-two'>What do you want to add today?</h2>
      <div className='add-text'>
        <input type="text" placeholder='Enter your task!' value={newItem} onChange={(e) => {setNewItem(e.target.value)}} />
        <button className='btn' onClick={() => {addItem()}}><GrAdd size={15} /></button>
      </div>
      <div className='list'>
        <ul>
          {items.map(item => {
            return(
              <div className='item-div'>
                <li key={item.id}>{item.value}</li>
                <button className='btn' onClick={() => {delteItem(item.id)}}><RiDeleteBin7Line /></button>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
