import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ClearBtn from './components/ClearBtn';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const addInput = value =>{
    setInput(input + value);
  };

  const getResult = () =>{
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert('Enter a data please')
    }
  }

  return (
    <div className="App">
      <div className='logo-contendor'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='calculator-container'>
        <Display  input = { input } />
        <div className='row'>
          <Button functionClick={ addInput }>1</Button>
          <Button functionClick={ addInput }>2</Button>
          <Button functionClick={ addInput }>3</Button> 
          <Button functionClick={ addInput }>+</Button>
        </div>
        <div className='row'>
          <Button functionClick={ addInput }>4</Button>
          <Button functionClick={ addInput }>5</Button>
          <Button functionClick={ addInput }>6</Button>
          <Button functionClick={ addInput }>-</Button>
        </div>
        <div className='row'>
          <Button functionClick={ addInput }>7</Button>
          <Button functionClick={ addInput }>8</Button>
          <Button functionClick={ addInput }>9</Button>
          <Button functionClick={ addInput }>*</Button>
        </div>
        <div className='row'>
          <Button functionClick={ getResult }>=</Button>
          <Button functionClick={ addInput }>0</Button>
          <Button functionClick={ addInput }>.</Button>
          <Button functionClick={ addInput }>/</Button>
        </div>
        <div className='row'>
          <ClearBtn functionClick={ () => setInput('') }>
            Clear
          </ClearBtn>
        </div>
      </div>
    </div>
  );
}

export default App;