
import './App.css';
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
export const COUNTER_CONTEXT=createContext();


function App() {
  const [count,setCount]=useState(0)
  const value={count,setCount}
 
 
  return (
   

<COUNTER_CONTEXT.Provider value={value}>
<div className="App mt-4">
<Home></Home>
</div>
</COUNTER_CONTEXT.Provider>



 
   
  );
}

export default App;
