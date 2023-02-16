import React from "react";
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter incrementBy = {2}/>
      </div>
    );
  }
}
