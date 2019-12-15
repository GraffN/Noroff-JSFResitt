import React from 'react';

export default class Search extends React.Component{
    constructor(props){
        super(props)
        this.handlePokemonSearchTerm = this.handlePokemonSearchTerm.bind(this);
    }
    handlePokemonSearchTerm(){
        const app = this;
        let phrase = app.refs.searchTerm.value;
        app.props.onSearchTerm(phrase);
    }
    render() {
        const app = this;

        return(
            <div>
                <input className='pokemon__search--input' type="text" ref='searchTerm' onChange={app.handlePokemonSearchTerm} placeholder='Search pokemon name...'/>
            </div>
        )
    }
}



