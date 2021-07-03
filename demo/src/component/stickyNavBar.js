import React, { Component } from 'react'
import {nanoid} from "nanoid"
import { Link } from 'react-router-dom'

class StickyNavBar extends Component {
    constructor(props){
            super(props);
            this.state = {
                nav: false
            }
    }
    componentDidMount(){
        this.listener = window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll",window);
    }

    handleScroll=()=>{
        if(window.pageYOffset >80){
            this.setState({nav:true});
        }
        else{
            this.setState({nav:false});
        }
    }

    navList = (
        <div>
            <ul className="sticky-nav-ul">
                {this.props.pages.map((page,index)=>{
                    return (<li key={nanoid()}> <Link to={page.path}>{page.name}</Link></li>)
                })
                }
            </ul>
        </div>
    )

    render() { 
        return (
            <nav className={this.state.nav?"sticky-nav":"nav"}>
                {this.navList}
            </nav>
        );
    }

}



export default StickyNavBar;