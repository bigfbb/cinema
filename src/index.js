import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import App from './App';
import Profile from './component/profile';
import AddMovie from './component/addMovie';
import Movies from './component/movies';
import ShowMovies from './component/showMovies';
import './style/index.css';
import Layout from './component/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
const MyRoutes = () => {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<App />}></Route>
          <Route path='Profile' element={<Profile></Profile>}></Route>
          <Route path='addMovie' element={<AddMovie   ></AddMovie>}></Route>
          <Route path='Movies' element={<Movies></Movies>}></Route>
          <Route path='Movies/:key' element={<ShowMovies></ShowMovies>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
root.render(
  <MyRoutes></MyRoutes>
);


