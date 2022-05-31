import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home';
import Perros from './pages/perros/Perros'
import Error404 from './pages/error404/Error404';
import {
    Route,
    Navigate,
    BrowserRouter,
    Routes
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Home' element={<Navigate replace to={"/"} />}></Route>
    <Route path='/Perros' element={<Perros />}></Route>
    <Route path='*' element={<Error404 />}></Route>
  </Routes>
  </BrowserRouter>
  /*<React.StrictMode>
    <Header />
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/perros">
          <Perros />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  
  </React.StrictMode>,*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
