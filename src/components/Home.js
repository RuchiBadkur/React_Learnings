import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            sum: 5
        }
        
    }
    
    render(){
        // const{count_temp, name_temp } = this.props;
        return (
            <>
                <div>{this.state.sum}</div>
                <div>Home</div>
                <div>Newton School</div>
                <a href="https://my.newtonschool.co/" target="_blank">Newton school website</a>


                <br/>
                {/* <div>Count - {this.props.count}</div> */}
                <div>Count - {this.props.count_temp}</div>
                <div>name - {this.props.name_temp}</div>
            </>
        )
    }
}

export default Home;