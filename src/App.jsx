
import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [mode,setMode] = useState('light');
 

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert('Dark Mode has been enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled','success')
    }
  }
  const [alert, setAlert] = useState(null);
    
  const showAlert = (message,type)=>{
      setAlert({
          msg:message,
          type:type,
  })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
      
  }

  return (
   <>
     <Router>
     <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} />

     <Alert  alert={alert}/>
     <div className="container">
      <Routes>
     <Route path='/' element ={<Textform heading = " Enter the text you want you analyze below" mode = {mode} showAlert = {showAlert}/>}/>
         <Route path='/home' element ={<Textform heading = " Enter the text you want you analyze below" mode = {mode} showAlert = {showAlert}/>}/>
         
         <Route path ='/about' element={<About mode={mode}/>}/>
     </Routes>
     </div> 
     </Router>
   </>
  );
}


export default App;
