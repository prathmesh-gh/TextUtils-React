import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    // Clear the alert after 1.5 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
    }
  }

  return (
    // <Router>
      <div>
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Form heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Form heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div> */}
      </div>
    // </Router>
  );
}

export default App;
