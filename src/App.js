import React from 'react';
import './App.css';

class App extends React.Component {
  repairId = 0;

  state = {
    repairInput: "",
    repairs: []
  }

  createNewRepair = e => {
    this.setState(prevState => {
      return {
        repairs: [...prevState.repairs, {task: prevState.repairInput, id: this.repairId++}], 
        repairInput: "",
      }
    });

    e.preventDefault();
  }

  updateRepairField = e => {
    // this is better, but we'll use the bottomr one for today
    // this.setState({[e.target.name]: e.target.value});
    this.setState({repairInput: e.target.value});
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
          <form onSubmit={this.createNewRepair}>
            <input 
              name="repairInput" 
              className="new-repair" 
              placeholder="What needs to be repaired?" 
              autoFocus="" 
              value={this.state.repairInput}
              onChange={this.updateRepairField}
            />
          </form>
        </header>
        <section className="main">       
          <ul className="repair-list">
            {this.state.repairs.map(repair => (
              <li key={repair.id}>
                <div className="view">
                  <label>{repair.task}</label>
                  <button className="destroy" onClick={() => this.removeRepair(repair)}></button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>      
    )
  }
}
 

export default App;
