import React from "react";
import Switch from "./switch/Switch";

class Toggle extends React.Component {
  state = { on: false };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  render() {
    return <Switch on={this.state.on} onClick={this.toggle} />;
  }
}

function Usage({ onToggle = (...arg) => console.log("onToggle", ...arg) }) {
  return <Toggle onToggle={onToggle} />;
}

export default Usage;
