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
        <div className="card-action">
          <Link to={`/details/${id}`}>View Details</Link>
        </div>
      </div>
    );
  }
}
Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  weight: PropTypes.number,
  hair_color: PropTypes.string
};
export default Person;
