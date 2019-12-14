import React from 'react';
import PokemonSpecificComponent from './pokemon-specific-component';

export default class PokemonSpecific extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            pokemonObject:[],
            pokemonId: this.props.match.params.id
        }
    }
    componentDidMount(){
        const app = this;
        app.getData();
    }
    getData(){
        const app = this;
        fetch('https://api.pokemontcg.io/v1/cards?id='+ app.state.pokemonId)
        .then( response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                pokemonObject: result.cards[0]
            })
            console.log(app.state.pokemonObject, 'result')
        });
    }
    render(){
        const app = this;
        let specificCard = <PokemonSpecificComponent 
                                imageUrl = {app.state.pokemonObject.imageUrl}
                                name = {app.state.pokemonObject.name}
                                type = {app.state.pokemonObject.type}
                                hp = {app.state.pokemonObject.hp}
                                rarity = {app.state.pokemonObject.rarity}
                                
                            ></PokemonSpecificComponent>
        return(
            <div>
                <h1>hello</h1>
                <div>{specificCard}</div>
            </div>
        )
    }
}