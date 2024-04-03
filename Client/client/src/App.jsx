
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation.jsx'
import PokeNumber from './components/PokeNumber.jsx'
import Stats from './components/Stats.jsx'

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/PokeNumber' element={<PokeNumber />} />
          <Route path='/Stats' element={<Stats />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
