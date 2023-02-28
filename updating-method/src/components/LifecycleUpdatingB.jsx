import React, { Component } from "react";
class LifrCycleUpdatingB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surname: "Darji",
    };
    console.log("LifrCycleUpdatingB :Constructor method");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifrCycleUpdatingB : getDerivedStateFromProps method");
    return null;
  }
  componentDidMount() {
    console.log("LifrCycleUpdatingB : componentDidMount method");
  }
  shouldComponentUpdate() {
    console.log("LifrCycleUpdatingB : shouldComponentUpdate method");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifrCycleUpdatingB : getSnapshotBeforeUpdate method");
    return null
  }
  componentDidUpdate() {
    console.log("LifrCycleUpdatingB : componentDidUpdate method");
  }
  render() {
    console.log("LifrCycleUpdatingB : render method");
    return (
      <div>
        <h1>Updating Lifecycle Methods </h1>
      </div>
    );
  }
}

export default LifrCycleUpdatingB;
