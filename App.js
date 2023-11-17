// import Header from './Header';
// import './App.css';

// function App() {
//   return (
//     <div >
//      <Header/>
//     </div>
//   );
// }
// src/App.js
import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Instagram Page</h1>
      </header>
      <main>
        <Header/>
      </main>
    </div>
  );
}

export default App;
