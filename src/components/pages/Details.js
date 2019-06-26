import React from "react";
import PropTypes from "prop-types";
class Details extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        {name} - {age}yrs
      </div>
    );
  }
}
Details.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string
};
export default Details;
