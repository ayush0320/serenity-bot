import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chat from './pages/Chat';
import MoodTracker from './pages/Moodtracker';
import Resoures from './pages/Resources';
import './App.css';

function App() { // in React, components are just functions that return HTML-like code
    return (
        // everything related to navigation must be inside this Router element.
        <Router>
            {/* container div for our entire application */}
            <div className="App">
                <Navbar>
                    {/* container div that will hold the content of our different pages */}
                    <div className="container">
                        {/* container for all our individual routes/pages */}
                        <Routes>
                            <Route path='/' element={<Chat />} />
                            <Route path='/mood' element={<MoodTracker />} />
                            <Route path='/resources' element={<Resoures />} />
                            <Route path='/' element={<Chat />} />

                        </Routes>
                    </div>
                </Navbar>
            </div>
        </Router>
    )
}

export default App;


















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
