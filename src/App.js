import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <nav>
          <Navbar title="MyApp" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
        </nav>
        <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="JessApp - Word and Char Counter" mode={mode} showAlert={showAlert}/>}/>
          <Route path="/about" element={<About mode={mode}/>}/>
        </Routes>
        </div>
      </Router>
    </> 
  );
}

export default App;
