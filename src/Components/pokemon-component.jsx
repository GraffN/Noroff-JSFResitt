import React from 'react';
import { Link } from 'react-router-dom'

export default class PokemonComponent extends React.Component {
    render(){
        return(
            <div className='pokemon__container'>
                <a href={'#/pokemon-specific/'+this.props.id}>
                    <div>
                        <img src={this.props.imageUrl} className='pokemon__image'  alt={this.props.name}></img>
                    </div>
                    <div>
                        <p className='pokemon__name'>{this.props.name}</p>
                        <div className='pokemon__info'>>></div>
                    </div>
                
                </a>

            </div>
        )
    }
}