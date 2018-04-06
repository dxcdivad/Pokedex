import React, { Component } from 'react';
import { getPokemon, getImage } from './listActions';



export default class List extends Component {
  constructor(props) {
    super(props);
    this.handleGetPokemon = this.handleGetPokemon.bind(this);
  }

  handleGetPokemon(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(getPokemon());
  }


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getImage());
  }


  render() {
    const { data, image } = this.props;

    return (
      <div className="container">
        <h2>PokeDex</h2>
        <h4>Learn about your favorite Pokemon!</h4>
        <hr />
        <button
          className="btn btn-primary"
          id="searchBtn"
          onClick={this.handleGetPokemon}
        >Search Pokemon!
        </button>
        <div className="list-group" 
              style={{ display: 'grid', 
                       gridTemplateColumns: 'repeat(3, 1fr)', 
                       gridGap: '10px', 
                       gridAutoRows: 'minMax(100px, auto)' 
              }}>
          {data.map((list, i) => (
            <div className="list-group-item"
              key={i}>
              <div className="row">
                <div
                  id="searchResults"
                >
                  {data && data[i].name}
                  <img 
                    src={image && image.front_default} 
                    alt='' 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    )
  }
}