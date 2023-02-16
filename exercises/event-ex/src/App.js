import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          Exercise 01: <ClickCounter incrementBy={2} />
        </div>
        <br></br>
        <br></br>
        <div>
          Exercise 03: <ClickTracker />
        </div>
      </div>
    );
  }
}
