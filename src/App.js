import React from "react";
import './assets/App.css';
import Navbar from './components/navbar.js'

function App() {
  return (
    <div className="App">
      <header><Navbar/></header>
      <main>
        <h1 className="text-yellow-500">This is Main</h1>
      </main>
      <footer>This is footer</footer>
    </div>
  );
}

export default App;