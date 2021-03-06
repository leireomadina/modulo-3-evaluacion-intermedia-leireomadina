import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/_pokeList.scss";
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    const pokemon = this.props.pokemons.map((pokemon) => {
      return (
        <li key={pokemon.id} className="card">
          <Pokemon pokemon={pokemon}/>
        </li>
      );
    });
    return (
      <div>
        <ul className="card-container">
         {pokemon}
        </ul>
      </div>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.array
}

export default PokeList;
