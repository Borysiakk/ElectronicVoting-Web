import logo from './logo.svg';
import './App.css';
import KeyPublic from './Paillier-Js/KeyPublic'
import Paillier from './Paillier-Js/Paillier'

import * as BigInteger from 'big-integer'
import BigIntegerRandom from "./Paillier-Js/BigIntegerRandom";




function App()
{
  function test()
  {
    let msg = BigInteger(9000);
    let keyPublic = new KeyPublic(689156,6557,79);
    keyPublic.n = 227800731004351670715409575690381407325436276339
    keyPublic.g = 3780311859458034989743633649706809625772914117671455108044426817760243879204793928882788793406
    keyPublic.r = 1008680910130464155335319
    let C = Paillier.Encryption(msg,keyPublic)
    console.log(C)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Welcome.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={test}>
          Aktywacja
        </button>
      </header>
    </div>
  );
}

export default App;
