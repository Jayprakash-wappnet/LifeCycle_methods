import React, { Component } from 'react'
import LifrCycleUpdatingB from './LifecycleUpdatingB'

/* This is class for understanding of execution oreder of Mounting methods 
The execution order is as follow:
    1.construction(props)
    2.getDerivedStateFromProps
    3.render()
    4.componentDidMount()
*/
class LifrCycleUpdatingA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Jayprakash'
      }
      console.log("LifrCycleUpdatingA :Constructor method")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifrCycleUpdatingA : getDerivedStateFromProps method')
        return null
    }
    componentDidMount(){
        console.log('LifrCycleUpdatingA : componentDidMount method')
    }
    shouldComponentUpdate(){
        console.log('LifrCycleUpdatingA : shouldComponentUpdate method')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifrCycleUpdatingA : getSnapshotBeforeUpdate method')
        return null
    }
    componentDidUpdate(){
        console.log('LifrCycleUpdatingA : componentDidUpdate method')

    }

    changeState = () => {
        this.setState({
            name : 'Aryan'
        })
    }
  render() {
    console.log('LifrCycleUpdatingA : render method')
    return (

    <div>
        <h1>Updating Lifecycle Methods </h1>
        <button onClick={this.changeState}>Click here</button>
        <LifrCycleUpdatingB/>
        
    </div>
    )
  }
}

export default LifrCycleUpdatingA
