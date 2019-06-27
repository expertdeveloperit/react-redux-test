import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import { filterData } from '../../actions/index.js';
/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  filterData: text => dispatch(filterData(text))
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state,
  people: state.peopleReducer.persons
});

/**
 * @class Filter
 * @extends {Component}
 */

class Filter extends Component {
  handleChange = e => {
    this.props.filterData(e.target.value);
  };

  render() {
    console.log('datata', this.props);
    return (
      <div className="container">
        <input
          name="filter"
          placeholder="Filter Data"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
