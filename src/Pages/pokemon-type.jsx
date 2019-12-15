import React from 'react';
import PokemonComponent from '../Components/pokemon-component';
import Search from '../Components/search';


export default class PokemonType extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            pokemonObject:[],
            pokemonCards:[],
            pokemonFiltered:[],
            pokemonType: this.props.match.params.type
        }
    this.getData = this.getData.bind(this);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);

    }
    componentDidMount(){
        const app = this;
        app.getData();
    }
    getData(){
        const app = this;
        fetch('https://api.pokemontcg.io/v1/cards?types='+ app.state.pokemonType)
        .then( response => {
            return response.json()
        })
        
        .then(result => {
            app.setState({
                pokemonObject: result.cards,
                pokemonFiltered: result.cards
            })
            console.log(app.state.pokemonObject, 'result')
        });
    }
    handleSearchTerm(searchTerm){
        const app = this;
        console.log(app.state.pokemonObject, 'search');
        let searchedObject = app.state.pokemonObject;

        
        
        let searched = searchedObject.filter((search) => {
            return search.name.indexOf(searchTerm) !== -1;
        })
        app.setState({
            pokemonCards:[],
            pokemonFiltered: searched,
        }, app.createCards()); 
    }
    createCards(){
        const app = this;
        let pokemonArray = app.state.pokemonFiltered;
        pokemonArray.forEach((value, key) => {
            app.state.pokemonCards.push(
                <PokemonComponent
                id = {value.id}
                imageUrl = {value.imageUrl}
                name = {value.name}
                type = {value.types}
                attacks = {value.attacks}
                key = {key}
                ></PokemonComponent>
                
            )
        })
    }
    render(){
        const app = this;
        app.createCards()
        return(
            console.log(this.state.pokemonFiltered, "should reset array"),
            console.log(this.state.pokemonCards, 'pokemonCards'),
            console.log(this.state.pokemonObject, 'pokemonObject'),
            console.log(this.state.pokemonFiltered, 'pokemonFiltered'),

            
            <div className='pokemon'>
                <div>
                    <a href={'/'}>Return</a>
                    </div>
                


                
                <div className='pokemon__search'>
                    <Search onSearchTerm={app.handleSearchTerm}></Search>
                </div>
                <div className='pokemon__wrapper'>{app.state.pokemonCards}</div>
                
            </div>
        )
    }
}