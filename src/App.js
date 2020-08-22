import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
    return(
        <div>
            <BrowserRouter>
                <Nav/>
                <Route path='/' exact component={Home} />
                <Route path='/about'  component={About} />
                <Route path='/contact' component={Contact} />
            </BrowserRouter>
        </div>
    )

}

export default App;