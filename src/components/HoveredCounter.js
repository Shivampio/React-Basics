import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoveredCounter extends Component {
    
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} X times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoveredCounter, 5) 
