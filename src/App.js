import './App.css';
import React from "react";
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route path="/Create" element={<Create />}></Route>
          <Route path="/Read" element={<Read />}></Route>
          <Route path="/Update" element={<Update />}></Route>
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;