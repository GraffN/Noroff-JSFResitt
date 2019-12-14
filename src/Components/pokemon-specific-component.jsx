import React from 'react';

export default class PokemonSpecificComponent extends React.Component {
    render(){
        return(
            <div className='pokemonSpecific__container'>
                    <div>
                        <img className='pokemonSpecific__image' src={this.props.imageUrl} alt={this.props.name}></img>
                    </div>
                    <div>
                        <p className='pokemonSpecific__info'><b>Name:</b>{this.props.name}</p>
                        <p className='pokemonSpecific__info'><b>Type:</b>{this.props.type}</p>
                        <p className='pokemonSpecific__info'><b>Hp:</b>{this.props.hp}</p>
                        <p className='pokemonSpecific__info'><b>Rarity:</b>{this.props.rarity}</p>
                        <ul>
                            weaknes:
                            {this.props.weaknes}
                            
                        </ul>
                    </div>
            </div>
        )
    }
}