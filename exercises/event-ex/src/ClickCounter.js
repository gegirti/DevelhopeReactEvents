import React from "react";

export class ClickCounter extends React.Component {
  state = { count: this.props.initialValue };

  handleCounterIncrement = () => {
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementBy,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleCounterIncrement}>
          Increment: {this.props.incrementBy}
        </button>
      </div>
    );
  }
}
ClickCounter.defaultProps = {
  initialValue: 0,
  incrementBy: 1,
};
