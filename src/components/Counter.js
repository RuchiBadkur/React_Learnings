import React, {Component} from 'react';
import Home from './Home';
// import BollywoodChild from './BollywoodChild';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            name: 'ruchi'
        }
    }

    increment = () => {
        this.setState({
            count:  this.state.count + 1
        })
    }

    decrement = () => {
        if(this.state.count > 0){
            this.setState({
                count:  this.state.count - 1
            })
        }
    }

    render(){
        return(
            <>
            <div>count</div>
            <div>{this.state.count}</div>
            <button onClick = {this.increment}>+</button>
            <button onClick = {this.decrement}>-</button>


            {/* parent - counter & child - home => passing data through props*/}
            <br/>

            {/* <Home count = {this.state.count}/> */}
            <Home count_temp = {this.state.count} name_temp={this.state.name}/>
            {/* <BollywoodChild  temp='passing props to functional component'/> */}
            </>
        )
    }
}

export default Counter;