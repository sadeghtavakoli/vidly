import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: [...newCounters] });
  };

  handleIncreament = (id) => {
    const newCounters = this.state.counters.map((counter) => {
      if (counter.id !== id) return counter;

      counter.value++;
      return counter;
    });
    this.setState({ counters: newCounters });
  };

  handleDecreament = (id) => {
    const newCounters = this.state.counters.map((counter) => {
      if (counter.id !== id) return counter;

      counter.value--;
      return counter;
    });
    this.setState({ counters: newCounters });
  };

  handleDelete = (id) => {
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== id
    );
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      // <main className="container ">
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
          />
        ))}
      </div>
      // </main>
    );
  }
}

export default counters;
