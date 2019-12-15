import React from 'react';

export default class PokemonSpecificComponent extends React.Component {
    render(){
        return(
            <div className='specific__container'>
                    <div className='specific__image'>
                        <img className='specific__image--size'  src={this.props.imageUrl} alt={this.props.name}></img>
                    </div>
                    <div className='specific__info'>
                        <p className='specific__info--size'><b>Name:</b>{this.props.name}</p>
                        <p className='specific__info--size'><b>Type:</b>{this.props.type}</p>
                        <p className='specific__info--size'><b>Hp:</b>{this.props.hp}</p>
                        <p className='specific__info--size'><b>Rarity:</b>{this.props.rarity}</p>
                        
                    </div>
            </div>
        )
    }
}