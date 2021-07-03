import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Todo from './component/pages/Todo/Todo'
import About from './component/pages/About/About'
import Detailed from './component/pages/Detailed/Detailed'
import './AppRouter.css'

export default function AppRouter() {
    return (
        <BrowserRouter>
        <div className='entirePage'>

            <div className='topNav'>
                <ul>
                    <li> <Link className="link" to='/'> Todo </Link></li>
                    <li> <Link className="link" to='/about'> about </Link></li>
                </ul>
            </div>
            <div className='main'>
                <Switch>
                    <Route exact path='/'>
                        <Todo />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/:id' component={Detailed}/>
                  
                </Switch>
            </div>
        </div>
        </BrowserRouter>
    )
};
