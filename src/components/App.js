import React, {Component} from 'react';
import News from './News/News';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button class=" btn waves-effect waves-light" type="submit" name="action"> +ADD CANDIDATE
            
        </button>
        <News />
      </div>
    );
  }
}


export default App;
