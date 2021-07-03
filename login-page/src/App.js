import React from 'react'
import './App.css'
import Dashboard from './component/Dashboard/Dashboard'
import Preference from './component/Preferences/Preferences'
import Login from './component/Login/Login'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import GetToken from './component/GetToken'

function App() {
    const {token, setToken} = GetToken();
    console.log('main thread');
    if (!token){
        console.log('no token');
        return <Login setToken={setToken}/>
    }

    return (
        <div className='login-main'>
            <h1>Application Log in</h1>
            <BrowserRouter>
            <Link to='/dashboard'>dashboard</Link>
            <Link to='/preference'>preference</Link>
                <Switch>
                    <Route path='/dashboard'>
                        <Dashboard />
                        <input type="hidden" value='avaveave'/>
                    </Route>
                    <Route path='/preference'>
                        <Preference />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;