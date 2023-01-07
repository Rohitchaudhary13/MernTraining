import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SneakerView from './features/sneaker/sneakerView'
import ShirtView from './features/shirt/shirtView'
import UserView from './features/user/userView'
function App() {

  return (
    <div className="App">
     <SneakerView />
     <ShirtView />
     <UserView />
    </div>
  )
}

export default App
