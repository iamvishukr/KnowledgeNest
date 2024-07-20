import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "../src/App.css"
import Home from './components/Home';
import Header from './components/layout/Header/Header';


function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
  )
}
export default App;