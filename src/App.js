import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './component/Main';
import Header from './header/Header';
import Test from './component/Test';
import Footer from './component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './component/Admin';
import { useState } from 'react';
import Login from './modal/Login';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/admin' element={<Admin />} />
          {/* <Test/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
