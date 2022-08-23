
import React from 'react';
import './App.css';
import Home from './components/Home';
import FunctionalComponent from './components/FunctionalComponent';
import Counter from './components/Counter';
import Bollywood from './components/Bollywood';
import BollywoodChild from './components/BollywoodChild';
import FunctionCounter from './components/functionCounter';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/myStyles.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './common/Header';
import Menubar from './common/Menubar';
import Footer from './common/Footer';
import Left from './common/Left';
import Right from './common/Right';


function App() {

  return (
    <div className="App">
        <div className="container">
        <BrowserRouter>
          <Header />

          <Menubar />

          <div className='row'>
            <Left />
            <div className='col-8 bg-dark'>
              <Routes>
                <Route path='/Home' element={<Home />} /> 
                <Route path='/FunctionalComponent' element={<FunctionalComponent />} /> 
                <Route path='/Counter' element={<Counter />} /> 
                <Route path='/Bollywood' element={<Bollywood />} /> 
                <Route path='/BollywoodChild' element={<BollywoodChild />} /> 
                <Route path='/FunctionCounter' element={<FunctionCounter />} /> 
              </Routes>
            </div>
            <Right />
          </div>

          <Footer />

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
