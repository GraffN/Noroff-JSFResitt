import React from 'react';
import Navigation from './navigation';
import '../Style/style.scss';
import Footer from './footer';


export default class App extends React.Component{
    render(){
        return(

            <div>
                <div><Navigation/></div>
                {this.props.children}
                <div><Footer/></div>
            </div>
            
        )
    }
}