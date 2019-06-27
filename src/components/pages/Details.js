import React from "react";
import PropTypes from "prop-types";
class Details extends React.Component {
  componentDidMount() {}

  opentab = (e, tabname) => {
    console.log("evt,tabname", e, tabname);
    let { i, tabcontent, tablinks } = "";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "block";
    e.currentTarget.className += " active";
  };
  render() {
    const { id, name, age, thumbnail, weight, hair_color } = this.props;
    console.log("person", this.props);
    return (
      <div className="container details">
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/nature/6" />
          </div>
          <div className="card-stacked">
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
            <div className="card-tabs">
              <ul className="tabs tabs-fixed-width">
                <li className="tab">
                  <a
                    href="#"
                    className="tablinks active"
                    onClick={e => this.opentab(e, "Friends")}
                  >
                    Friends
                  </a>
                </li>
                <li className="tab">
                  <a
                    className="tablinks"
                    href="#"
                    onClick={e => this.opentab(e, "Profession")}
                  >
                    Profession
                  </a>
                </li>

                <li
                  className="indicator"
                  style={{ left: " 0px", right: "234px" }}
                />
              </ul>
            </div>
            <div className="card-content grey lighten-4">
              <div
                id="Friends"
                style={{ display: "block" }}
                className="active tabcontent"
              >
                dsdsd 1
              </div>
              <div
                id="Profession"
                className="tabcontent"
                style={{ display: "none" }}
              >
                Tedsdsdsdt 2
              </div>
            </div>
          </div>
        </div>
        <div className="card" key={id}>
          <div className="card-image">
            <img src={thumbnail} alt={thumbnail} />
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
        </div>
      </div>
    );
  }
}
Details.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  weight: PropTypes.string,
  hair_color: PropTypes.string
};
export default Details;
