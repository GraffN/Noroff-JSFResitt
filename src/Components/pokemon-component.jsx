import React from 'react';
import { Link } from 'react-router-dom'

export default class PokemonComponent extends React.Component {
    render(){
        return(
            <div className='pokemon__container'>
                <a href={'#/pokemon-specific/'+this.props.id}>
                    <div className='pokemon__image'>
                        <img src={this.props.imageUrl} className='pokemon__image--size'   alt={this.props.name}></img>
                    </div>
                    <div className='pokemon__info'>
                        <p className='pokemon__name'>{this.props.name}</p>
                        <div className='pokemon__more'>>></div>
                    </div>
                
                </a>

            </div>
        )
    }
}