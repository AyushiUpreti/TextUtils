import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {



  const [mode,setMode]=useState("light"); //state

  const [button,setButton]=useState("Enable DarkMode");

  const [alert,setAlert]=useState(null);


 
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }



  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  // }

  const toggleMode =(cls)=>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
    if(mode==="light"){
      setMode("dark");
      setButton("Enable LightMode");
      document.body.style.backgroundColor="#000000";
      showAlert("DarkMode has been enabled" , "success");
      // document.title="TextUtils - darkMode";
    }
      
    else{
      setMode("light");
      setButton("Enable DarkMode");
      document.body.style.backgroundColor="white";
      showAlert("LightMode has been enabled" , "success");
    }
  }


  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} button={button}/>
    <div className='container my-3' mode={mode}>
    <Alert alert={alert}/>
    <Routes>
          {/* <Route exact path='/about' element= {<About/>} /> */}
          <Route exact path='/' element = {<TextForm heading="Enter the Text to analyse"  mode={mode} showAlert={showAlert} />} />
    </Routes>
    </div>
    </Router>
  

  </>
);
  
}

export default App;
