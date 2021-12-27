import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Shivam'
        }
        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycle A componentUpdate')
        }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A Snapshot')
    }

    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate')
    }

    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                LifecycleA
            </div>
        )
    }
}

export default LifeCycleA
