import React from "react";
import PropTypes from "prop-types";
class Person extends React.Component {
  render() {
    const { id, name, age, thumbnail, weight, hair_color } = this.props;
    console.log("persone data", this.props);
    return (
      <div className="card" key={id}>
        <div className="card-image">
          <img src={thumbnail} alt={thumbnail} />

          <span
            to="/"
            className="btn-floating halfway-fab waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </span>
        </div>

        <div className="card-content">
          <p className="card-title">
            <b>{name}</b>
          </p>
          <p>
            <b>Age:&nbsp;</b>
            {age}yrs
          </p>
          <p>
            <b>Weight: </b>
            {weight}
          </p>
          <p>
            <b>Hair Color: </b>
            {hair_color}
          </p>
        </div>
      </div>
    );
  }
}
Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string
};
export default Person;
