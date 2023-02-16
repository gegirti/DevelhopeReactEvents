import React from "react";

export class ClickTracker extends React.Component {
  state = { lastKey: this.props.lastKey };

  handleTracker = (event) => {
    console.log(event);
    this.setState({ lastKey: event.target.innerHTML });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleTracker}>Button 1</button>
        <button onClick={this.handleTracker}>Button 2</button>
        <button onClick={this.handleTracker}>Button 3</button>
        <h1>Last Pressed Button: {this.state.lastKey}</h1>
      </div>
    );
  }
}
ClickTracker.defaultProps = {
  lastKey: false,
};
