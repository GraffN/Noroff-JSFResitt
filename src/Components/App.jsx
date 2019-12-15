import React from 'react';
import Navigation from './navigation';
import '../Style/style.scss';


export default class App extends React.Component{
    render(){
        return(

            <div>
                <div><Navigation/></div>
                {this.props.children}
            </div>
            
        )
    }
}