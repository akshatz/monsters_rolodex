import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      monsters:[
        {
          name: 'Frankenstein',
          id:'1'
        },
        {
          name: 'Dracula',
          id:2
        },
        {
          name: 'Zombie',
          id:3
        },
      ]
    };
  }

  render(){
    return (
      <div className ="App">
        {
          this.state.monsters.map(monsters => (
            <h1 key={monsters.id}>{monsters.name}</h1>
          ))
        }
      </div>
    );
  }
}
export default App;
