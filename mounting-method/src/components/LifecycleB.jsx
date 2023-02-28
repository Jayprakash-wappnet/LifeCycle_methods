import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         surname:'darji'
      }
      console.log('LifecycleB :constructor method')
    }

    static getDerivedStateFromProps(state,props){
        console.log('LifecycleB : getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle B : componentDidMount')
    }
    
  render() {
    console.log('Lifecycle B: render Method')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB
