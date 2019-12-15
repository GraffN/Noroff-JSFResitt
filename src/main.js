import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import App from './components/App';
import Pokemon from './Pages/pokemon';
import PokemonSpecific from './Pages/pokemon-specific';
import PokemonType from './Pages/pokemon-type';
import Contact from './Pages/contact';

const routes = (
    <HashRouter>
        <Switch>
            <App>
                <Route path='/' exact component={Pokemon} />
                <Route path='/contact' component={Contact}/>
                <Route path='/pokemon-specific/:id' component={PokemonSpecific} />
                <Route path='/pokemon-type/:type' component={PokemonType}/>
            </App>
        </Switch>
    </HashRouter>
);

const outlet = document.getElementById('app')

const render = () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        outlet
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(render);
}
