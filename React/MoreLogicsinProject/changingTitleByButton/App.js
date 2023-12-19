

import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
function App() {
  const [mode, setMode]=useState('light');//whether dark is enbled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>
  {
    setAlert(
      {msg :message,
         type:type}
    )
       setTimeout(()=>
       {
        setAlert(null);
       },1500);
  }
  const toggleMode =()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark Mode has been enabled","success");
      document.title='TextUtils-LightMode';
    }
    else
    {
      setMode('dark')
      document.body.style.backgroundColor='#003267';
      showAlert("Light Mode has been enabled","success");
      document.title='TextUtils-DarkMode';
    }
  }
  
  return (
    <>
      
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div class="container">
     {/* <About/> */}
     <TextForm heading="This is the Text form" mode={mode} toggleMode={toggleMode}showAlert={showAlert}/>
     
     </div>
   
    </>
  );
}

export default App;
