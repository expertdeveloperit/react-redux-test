import React, { Component } from "react";
import { connect } from "react-redux";

import "../../App.css";

import { loadPersonDetails } from "../../actions/index.js";
import Details from "./Details";
/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  loadPersonDetails: id => dispatch(loadPersonDetails(id))
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state,
  person: state.peopleReducer.person
});

/**
 * @class Single
 * @extends {Component}
 */
class Single extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.loadPersonDetails(id);
  }

  render() {
    const { person } = this.props;
    return <div>{person ? <Details key={person.id} {...person} /> : null}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);
