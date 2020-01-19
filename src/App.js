import React from 'react';
import './App.css';
import { provider } from "./ethers-provider";
import { makeContract } from "./contract";


const CONTRACT_ADDRESS = "0x5c5336CBf57DEE0e331Bd0512c2c321BE73711e3";
export class App extends React.Component {
  state = { provider: null, contract: null, numbers: [] };


  componentDidMount = async () => {
    let p = await provider();
    let c = await makeContract(CONTRACT_ADDRESS, p)
    c.on('NumberAdded', (newNumber) => console.log(newNumber))
    this.setState({ provider: p, contract: c });
  }

  render() {


    return (
      <div className="App">
        
      </div>
    );
  };
};

export default App;
