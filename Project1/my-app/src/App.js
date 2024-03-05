import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomeHome from './Components/HomeHome.js';
import HomeClient from './Components/HomeClient.js';
import HomeCompany from './Components/HomeCompany.js';

import Navigation from './Components/Navigation.js';



const App = (props) => {
  return (
      <div>
        <header>
          <h2>Home</h2>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path='/home' element={<HomeHome />} />
            <Route path='/client/:clientId' element={<HomeClient />} />
            <Route path='/company/:companyId' element={<HomeCompany />} />
          </Routes>
        </main>
      </div>

  );
};

export default App;
