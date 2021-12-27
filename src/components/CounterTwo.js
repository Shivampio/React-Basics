import React, { Component } from 'react'

class CounterTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
          return { count: prevState.count + 1 };
        });
      };
    render() {
        return (
            <div>
                {this.props.children(this.incrementCount, this.state.count)}
            </div>
        )
    }
}

export default CounterTwo
