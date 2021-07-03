import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {list:[
            {cid:123, title: "first"  },
            {cid:124, title: "second"  },
        ]}
        this.props.history.push("/home/")
    }
    render() { 
        return (
            <div>

            {/* <Redirect to="/home">

            </Redirect> */}
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        console.log(index);
                        return( <li key={index}>
                            <Link to={'/list/'+item.cid}>{item.title}</Link></li>)
                    })
                }
            </ul>
            </div>
          );
    }
}
 
export default Index;