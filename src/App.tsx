import React from "react";
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';


const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
           path="/cart" 
           element={
           <React.Suspense fallback={<div>Загрузка...</div>}>
             <Cart />
           </React.Suspense>} 
           />
          <Route
           path="*" 
           element={
            <React.Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </React.Suspense>} 
            />
        </Routes>
      </div>
    </div>
  );
}

export default App;
