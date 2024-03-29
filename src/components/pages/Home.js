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
    return (
      <div className="container">
        <Filter />
        <div className="box">
          {people.persons ? (
            people.persons.map(person => {
              return <Person key={person.id} {...person} />;
            })
          ) : (
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
