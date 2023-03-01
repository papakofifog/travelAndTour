import React from 'react'
import './App.css'
import NavBar from './components/navbar'
import Card from './components/cards'


function App() {
  

  return (
    <div className="App">
      <NavBar />
      <section className='cardList'>
        <Card />
      </section>
    </div>
  )
}

export default App
