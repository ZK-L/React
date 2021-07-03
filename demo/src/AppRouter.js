import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Index from "./pages/index.js"
import Video from "./pages/video/video.js"
import Workplace from "./pages/workplace/workplace.js"
import { nanoid } from "nanoid"
import Header from "./component/header.js"

export default function AppRouter(props) {
    const [scroll, setScroll] = useState(false);
    window.addEventListener("scroll",()=>{
        if (window.pageYOffset>80){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    })
    return (
        <Router>
            <Header/>
            <div className="mainDiv">
                <div className="leftNav">
                    <div id="leftScroll" className={scroll?"floatNav":"viewNav"}>
                        <h2>Root Navigation</h2>
                        <ul>
                            <li key={nanoid()}><Link className="navItem" to="/">Home Page</Link></li>
                            <li key={nanoid()}><Link className="navItem" to="/video/">Video Page</Link></li>
                            <li key={nanoid()}><Link className="navItem" to="/workplace/">Workplace Page</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="rightMain">
                    <Route path="/" exact component={Index} />
                    <Route path="/video/" component={Video} />
                    <Route path="/workplace/" component={Workplace} />
                </div>

            </div>
        </Router>
    )
}