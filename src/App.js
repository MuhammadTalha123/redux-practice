import React, { Component } from "react";
import { connect } from 'react-redux';
import './App.css';

function mapStateToProps(state) {
  return {
    value: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  };
}

function App({ value, increment, decrement }) {
  return (
    <div className="container">
      <button onClick={() => increment()}>Increment</button>
      <h1>{value}</h1>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
