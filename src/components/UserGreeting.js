import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userLoggedIn: true
        }
    }
    

    render() {
        return this.state.userLoggedIn && <div>Welcome Shivam</div>

    //    return this.state.userLoggedIn ? 
    //     <div>Welcome Shivam</div>:
    //     <div>Welcome Guest</div>

    //    if(this.state.userLoggedIn){
    //        return <div>Welcome Shivam</div>
    //    }else {
    //        return <div>Welcome Guest</div>
    //    }
    }
}

export default UserGreeting
