
import React, { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import Layout from './component/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';

function App() {
  const [movies,setMovies] = useState([]);

  const getMovies = async () => {
    const response=await api.get("/api/movies");
    console.log(response.data);
    setMovies(response.data);

  }
  useEffect(()=>{
    getMovies();
  },[]);


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Layout />} > 
        <Route path="/" element={<Home movies={movies}/>} />
        <Route path="/trailer/:ytTrailerId" element={<Trailer/> }></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
