import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Vote from './components/Vote';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      trumpVotes:0,
      bidenVotes:0
    }
  }
  

trumpVotes = (numberOfVote) =>{
  this.setState({
    trumpVotes:numberOfVote
  })
  
}

bidenVotes = (numberOfVote) =>{
  this.setState({
    bidenVotes:numberOfVote
  })
  
}


  render(){
  return (
    <div className="App">
      <div className="imgBack" >
      <div className="sum">
        Stimmen Summe: {this.state.bidenVotes + this.state.trumpVotes} 
      </div>
      <div className="voteContainer">
        <Vote name="Trump" onIncrement={this.trumpVotes} />
        <Vote name="Biden" onIncrement={this.bidenVotes} />
      </div>
      </div>
    </div>
  );
  }
}

export default App;
