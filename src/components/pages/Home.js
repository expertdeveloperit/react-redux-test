import React, { Component } from "react";
import { connect } from "react-redux";

import "../../App.css";

import { loadPeopelData } from "../../actions/index.js";
import Person from "./Person";
/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  loadPeopleData: () => dispatch(loadPeopelData())
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state,
  people: state.peopleReducer
});

/**
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  componentDidMount() {
    this.props.loadPeopleData();
  }
  render() {
    const { people } = this.props;

    return (
      <div className="container">
        <h3 className="center">Animals Data</h3>
        <div className="box">
          {people.persons
            ? people.persons.map(person => {
                return <Person key={person.id} {...person} />;
              })
            : "Loading..."}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
