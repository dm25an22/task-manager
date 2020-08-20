import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  render() {
    console.log(`Произошел рендер`);
    return (
      <React.Fragment>
        <div>
          Counter now: {this.state.count}
        </div>
        <button onClick={() => {
          this.setState((prevState) => {
            return {
              count: prevState.count + 1
            }
          })
        }} >Incrimeant</button>
        <button onClick={() => {
          this.setState((prevState) => {
            return {
              count: prevState.count - 1
            }
          })
        }}>Decrimeant</button>
      </React.Fragment>
    ); 
  }
}

export default Counter;