import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Index from "./pages/index"
import List from "./pages/list"
import Home from "./pages/home"

function App(){
    return(
        <Router>
            <ul>
                <li><Link to="/">first page</Link></li>
                <li><Link to="/list/888">list</Link></li>
            </ul>
            <Route path="/" exact component={Index} /> {/* note the exact key word */}
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </Router>
    );
}

export default App;
