import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Person extends React.Component {
  render() {
    const { id, name, age, thumbnail, weight, hair_color } = this.props;
    return (
      <div className="card" key={id}>
        <div className="card-image">
          <Link to={`/details/${id}`}>
            {" "}
            <img src={thumbnail} alt={thumbnail} />
          </Link>
          <span className="card-title">{name}</span>
          <span
            to="/"
            className="btn-floating halfway-fab waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </span>
        </div>

        <div className="card-content">
          <p>
            <b>Weight: </b>
            {weight}
          </p>
          <p>
            <b>Hair Color: </b>
            {hair_color}
          </p>
          <p>
            <b>Age: {age}yrs</b>
          </p>
        </div>
        <Link to={`/details/${id}`}>View Details</Link>
      </div>
    );
  }
}
Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  weight: PropTypes.string,
  hair_color: PropTypes.string
};
export default Person;
