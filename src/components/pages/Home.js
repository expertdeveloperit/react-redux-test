import React, { Component } from "react";
import { connect } from "react-redux";

import "../../App.css";

import { loadPeopelData } from "../../actions/index.js";
import Person from "./Person";
import Filter from "./Filter";
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
    console.log("people", people);
    return (
      <div className="container">
        <h3 className="center">Persons Data</h3>
        <Filter />
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
