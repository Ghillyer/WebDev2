import logo from './logo.svg';
import './App.css';
import HeaderApp from './components/HeaderApp.js';
import PhotoThumb from './components/PhotoThumb.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import React, { useEffect, useState } from "react";
import * as cloneDeep from 'lodash/cloneDeep';
import { Routes, Route } from 'react-router-dom'; 
import Home from './components/Home.js'; 
import About from './components/About.js';

function App() { 
  
  const [photos, setPhotos] = useState([]); 
  
 /* useEffect( () => { 
  const url = 
 "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb"; 
  fetch(url) 
  .then( resp => resp.json() ) 
  .then( data => setPhotos(data)) 
  .catch( err => console.error(err)); 
  
  });*/ 
  
  const updatePhoto = (id, photo) => { 
    // Create deep clone of photo array from state. 
    // We will use a lodash function for that task. 
    const copyPhotos = cloneDeep(photos); 
    // find photo to update in cloned array 
    const photoToReplace = copyPhotos.find( p => p.id === id); 
    // replace photo fields with edited values 
    photoToReplace.title = photo.title; 
    photoToReplace.location.city = photo.location.city; 
    photoToReplace.location.country = photo.location.country; 
    // update state 
    setPhotos(copyPhotos); 
   }

 useEffect( () => { 
  const getData = async () => { 
  try { 
  const url = 
 "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb"; 
  const response = await fetch(url); 
  const data = await response.json(); 
  setPhotos(data); 
  } 
  catch (err) { 
  console.error(err); 
  } 
  }; 
  // invoke the async function 
  getData(); 
  }, [] );

  return ( 
    <main> 
      <HeaderApp />
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/home' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/browse' element={<PhotoBrowser photos={photos} updatePhoto={updatePhoto} />} />
      </Routes> 
    </main> 
    ); 
   }


export default App;
