import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card.component';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      monsters:[]
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    return (
      <div className ="App">
        <CardList name='Vihua'>     {
          this.state.monsters.map(monsters => (
            <h1 key={monsters.id}>{monsters.name}</h1>
          ))
        }
   </CardList>
      </div>
    );
  }
}
export default App;
