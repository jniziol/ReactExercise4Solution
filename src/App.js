import React from 'react';
import Repair from './Repair';
import RepairForm from './RepairForm';
import './App.css';

class App extends React.Component {
  repairId = 0;

  state = {
    repairs: [],
  }

  componentDidMount = () => {
    fetch('https://5ed0108416017c00165e327c.mockapi.io/api/v1/repairs')
      .then(resp => resp.json())
      .then(json => {
        this.setState({repairs: json});
      });
  }

  createNewRepair = repairString => {
    this.setState(prevState => {
      return {
        repairs: [...prevState.repairs, {task: repairString, id: this.repairId++}]
      }
    });
  }

  removeRepair = repair => {
    this.setState(prevState => ({
      repairs: prevState.repairs.filter(repairElement => repairElement !== repair)
    }));
  }

  render = () => {
    return (     
      <section className="fixmeapp">
        <header className="header">
          <h1>rep🔥irs</h1>
          <RepairForm createNewRepair={this.createNewRepair}/>         
        </header>
        <section className="main">       
          <ul className="repair-list">
            {this.state.repairs.map(repair => (
              <Repair repair={repair} key={repair.id} removeRepair={this.removeRepair}/>
            ))}
          </ul>
        </section>
      </section>
    )
  }
}
 

export default App;
