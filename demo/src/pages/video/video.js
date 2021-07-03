import React from 'react'
import Page1 from './page1'
import Page2 from './page2'
import StickyNavBar from '../../component/stickyNavBar'
import {Route} from 'react-router-dom'
import {nanoid} from 'nanoid'

export default function video(props) {
    const path = "/video/";
    const pages = [
        { name: "page1", component: Page1, path: path },
        { name: "page2", component: Page2, path: path + "page2" }]
    return (
        <div>
            <StickyNavBar path={path} pages={pages} />
            <div className="subMain">
                {pages.map(page => {
                    return (<Route key={nanoid()} path={page.path + '/'} component={page.component} />)
                })
                }
            </div>
        </div>
    )
};