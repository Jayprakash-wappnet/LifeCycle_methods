import React, { Component } from 'react'
import LifecycleB from './LifecycleB'   //this component import as child component of A

/* This is class for understanding of execution oreder of Mounting methods 
The execution order is as follow:
    1.construction(props)
    2.getDerivedStateFromProps
    3.render()
    4.componentDidMount()
*/
class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Jayprakash'
      }
      console.log("LifecycleA :Constructor method")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA :static getDerivedFromState method')
        return null
    }
    componentDidMount(){
        console.log("LifecycleA :componentDidMount method")
    }
  render() {
      console.log('LifecycleA :Render method')
    return (

    <div>
        <h1>Mountings Methods </h1>
        <LifecycleB/>
    </div>
    )
  }
}

export default LifecycleA
