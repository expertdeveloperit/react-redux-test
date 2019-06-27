import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.css";
import { filterData } from "../../actions/index.js";
import SearchSvg from "../Svg/SearchSvg";
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
    this.setState({ filter: true });
    this.props.filterData(e.target.value);
  };

  render() {
    return (
      <div className="container">
        <div className="search_field ">
          <input
            name="filter"
            placeholder="Filter Data"
            onChange={this.handleChange}
          />
          <span className="filter_icon">
            <SearchSvg />
          </span>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
