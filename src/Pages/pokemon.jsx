import React from 'react';
import PokemonComponent from '../Components/pokemon-component'

export default class Pokemon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pokemonObject: [],
            pokemonCards: []
        }
    this.getData = this.getData.bind(this);        
    }


    componentDidMount(){
        const app = this;
        app.getData()
    }
    getData(){
        const app = this;
        fetch('https://api.pokemontcg.io/v1/cards?setCode=base1')
        .then(response => {
            return response.json()

        })
        .then(result => {
            app.setState({
                pokemonObject: result.cards
            });
        })
    }
   
    createCards(){
        const app = this;
        let pokemonArray = app.state.pokemonObject;
        pokemonArray.forEach((value, key) => {
            app.state.pokemonCards.push(
                <PokemonComponent
                id = {value.id}
                imageUrl = {value.imageUrl}
                name = {value.name}
                key = {key}
                ></PokemonComponent>
            )
        })
    }
    render(){
        const app = this;
        app.createCards()
        return(
            console.log(this.state.pokemonObject),

            <div className='pokemon'>
                <p>This is all the cards</p>
                <div className='pokemon__wrapper'>{app.state.pokemonCards}</div>
            </div>            
        )
    }
}