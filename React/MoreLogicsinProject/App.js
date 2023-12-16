
// import About from './About';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode]=useState('light');//whether dark is enbled or not
  const toggleMode =()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      
    }
    else
    {
      setMode('dark')
      document.body.style.backgroundColor='#003267';
    }
  }
  return (
    <>
      
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <div class="container">
    {/* <About/> */}
     <TextForm heading="This is the Text form" mode={mode} toggleMode={toggleMode}/>
     </div>
   
    </>
  );
}

export default App;
