import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState()

  const clear=()=>{
    setInput("")
  }

  const handleClick=(e)=>{
    setInput(input.concat(e.target.value))

  }

  const calculate=()=>{
    setInput(eval(input));
  }

  return (
    <>
      <div className="container">
        <input className='inputs' type="text" value={input}/>
        <div className="buttons">
          <button value="7" onClick={handleClick}>7</button>
          <button value="8" onClick={handleClick}>8</button>
          <button value="+" onClick={handleClick} className='high'>+</button>
          <button value="9" onClick={handleClick}>9</button>
          <button value="4" onClick={handleClick}>4</button>
          <button value="-" onClick={handleClick} className='high'>-</button>
          <button value="5" onClick={handleClick}>5</button>
          <button value="6" onClick={handleClick}>6</button>
          <button value="*" onClick={handleClick} className='high'>*</button>
          <button value="1" onClick={handleClick}>1</button>
          <button value="2" onClick={handleClick}>2</button>
          <button value="/" onClick={handleClick} className='high'>/</button>
          <button value="3" onClick={handleClick}>3</button>
          <button value="0" onClick={handleClick}>0</button>
          <button value="=" onClick={calculate} className='high'>=</button>
          <button  onClick={clear} className='clear'>Clear</button>
          
        </div>
      </div>
    </>
  )
}

export default App
