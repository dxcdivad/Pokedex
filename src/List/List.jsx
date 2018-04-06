import React, { Component } from 'react';



export default class List extends Component {
  constructor(props){
    super(props);
  }

render() {
  return (
    <div className="container">
      <h2>PokeDex</h2>
      <h4>Learn about your favorite Pokemon!</h4>
    </div>
  )
}
}