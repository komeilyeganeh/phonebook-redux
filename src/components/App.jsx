import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Form from "./from/Form";
import ListUsers from "./ListUsers";

const App = (props) => {
  return (
    <div className="container">
      <Form />
      <ListUsers items={props.persons}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { persons: state };
};

export default connect(mapStateToProps)(App);
