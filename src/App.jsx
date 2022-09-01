import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import data from './data';
function App() {
  var mappedData=data.map((item) =>{
    return <Card 
    key={item.id}
    {...item}
    />
  }) 

  return (
    <div className="App">

      <Navbar/>
      {mappedData}
    </div>
  )
}

export default App
