import React, { Component } from 'react';
import axios from '../../axiostest';

class TestContainer extends Component {
  sendIt() {
    const things = {
      thingOne: "itWorked"
    }
    axios.post( '/dylan.json', things )
            .then( response => {
              console.log(response)} )
            .catch(error => {
              console.log(error)
            } );
  }

  render() {
    return (
      <div>
       <button onClick={this.sendIt}>Send it</button>
      </div>
    );
  }
}

export default TestContainer;
