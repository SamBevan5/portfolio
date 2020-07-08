import React from 'react';
import { createBrowserHistory } from 'history';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Portfolio from './components/Portfolio'
import Profile from './components/Profile'
import ReactDOM from 'react-dom';
import './scss/styles.scss'



    
const App = (props) => {
    
    let hist = createBrowserHistory()

    return (
        <>
            <BrowserRouter history={hist}>
                    <Switch>
                        <Route exact path="/" component={Portfolio}/>
                        <Route path="/profile" component={Profile}/>
                    </Switch>
            </BrowserRouter>
            
        </>
    )

}


const target = document.getElementById('root');
ReactDOM.render(<App />, target);
