import React from 'react'

// state is similar to props, but it is private and fully controlled by the component 
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }   
    
    componentDidMount(){
        this.timer=setInterval(() => {
            this.setState({date: new Date()});   
            // console.log(this.state.date); 
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
       return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <input type="text" onChange={this.change}/>
          </div>
        );

    }

    change(e){
        console.log(e.target.value);
    }
    
}
export default Clock;
