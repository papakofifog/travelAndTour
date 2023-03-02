import React from 'react'
import './App.css'
import NavBar from './components/navbar'
import Card from './components/cards'
import Data from './assets/data'

function App() {
  let places= Data.map((site)=>{
    return (
      <Card 
      key={site.id}
      {...site}
      />
    )
  })

  return (
    <div className="App">
      <NavBar />
      <section className='cardList'>
        {places}
      </section>
    </div>
  )
}

export default App
