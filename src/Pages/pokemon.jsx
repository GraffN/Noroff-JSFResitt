import React from 'react';
import PokemonComponent from '../Components/pokemon-component'
import Search from '../Components/search';

export default class Pokemon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pokemonObject: [],
            pokemonCards: [],
            pokemonFiltered: []
        }
    this.getData = this.getData.bind(this);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);        
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
                pokemonObject: result.cards,
                pokemonFiltered: result.cards
                
            });
        })
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
            console.log(this.state.pokemonCards, 'pokemonCards'),
            console.log(this.state.pokemonObject, 'pokemonObject'),
            console.log(this.state.pokemonFiltered, 'pokemonFiltered'),

            
            <div className='pokemon'>
                <div className='pokemon__search'>
                    <Search onSearchTerm={app.handleSearchTerm}></Search>
                </div>
                <div className='selection'>
                    <div className='[ selection__type ]'>
                        <a href={'/'}>Return</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--fire ]'>
                        <a href={'#/pokemon-type/fire'}>Fire</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--water ]'>
                        <a href={'#/pokemon-type/water'}>Water</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--fighting ]'>
                        <a href={'#/pokemon-type/fighting'}>Fight</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--psychic ]'>
                        <a href={'#/pokemon-type/Psychic'}>Psychic</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--grass ]'>
                        <a href={'#/pokemon-type/Grass'}>Grass</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--lightning ]'>
                        <a href={'#/pokemon-type/Lightning'}>Lightning</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--colourless ]'>
                        <a href={'#/pokemon-type/Colorless'}>Colorless</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--dragon ]'>
                        <a href={'#/pokemon-type/Dragon'}>Dragon</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--fairy ]'>
                        <a href={'#/pokemon-type/Fairy'}>Fairy</a>
                    </div>
                    <div className='[ selection__type ][ selection__type--metal ]'>
                        <a href={'#/pokemon-type/Metal'}>Metal</a>
                    </div>  
                </div>
                


                
                
                <div className='pokemon__wrapper'>{app.state.pokemonCards}</div>
                
            </div>
        )
    }
}