import React, { Component } from 'react';
import axios from '../../axiostest';

class TestContainer extends Component {
  sendIt() {
    const things = {
      thingOne: "THIS IS WORKING"
    }
    axios.post( '/dylan.json', things )
            .then( response => {
              console.log(response)} )
            .catch(error => {
              console.log(error)
            } );
  }

  getIt() {
    axios.get( '/dylan.json')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
       <button onClick={this.sendIt}>Send it</button>
       <button onClick={this.getIt}>Get it</button>
      </div>
    );
  }
}

export default TestContainer;
