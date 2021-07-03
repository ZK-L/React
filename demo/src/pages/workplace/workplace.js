import React from 'react'
import Page1 from './page1'
import Page2 from './page2'
import StickyNavBar from '../../component/stickyNavBar'
import {Route} from 'react-router-dom'
import {nanoid} from "nanoid";

export default function workplace(props) {
    const path = "/workplace";
    const pages = [
        { name: "Workspace page1", component: Page1, path: path +"/" },
        { name: "Workspace page2", component: Page2, path: path + "/page2" }]
    return (
        <div>
            <StickyNavBar path={path} pages={pages} />
            <div>
                {pages.map(page => {
                    return (<Route key={nanoid()} path={page.path + '/'} component={page.component} />)
                })
                }
            </div>
        </div>
    )
};