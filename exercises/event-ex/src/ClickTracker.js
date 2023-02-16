import React from "react";

export class ClickTracker extends React.Component {
  state = { altKey: this.props.altKey };

  handleTracker = (event) => {
    console.log(event);
    this.setState((state) => {
      return {
        state: state.altKey,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleTracker}>Button 1</button>
        <button onClick={this.handleTracker}>Button 2</button>
        <button onClick={this.handleTracker}>Button 3</button>
        <h1>Last Pressed Button: {this.handleTracker.altKey}</h1>
      </div>
    );
  }
}
ClickTracker.defaultProps = {
  altKey: false,
};
