import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
 
class App extends React.Component {

  render() {
    return <div> Hello I'm from the REACT Page </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
 