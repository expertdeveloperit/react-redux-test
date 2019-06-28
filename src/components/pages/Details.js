import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Details extends React.Component {
  componentDidMount() {}

  opentab = (e, tabname) => {
    let { i, tabcontent, tablinks } = "";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "flex";
    e.currentTarget.className += " active";
  };
  render() {
    const {
      name,
      age,
      thumbnail,
      weight,
      hair_color,
      friends,
      professions
    } = this.props;

    return (
      <div className="container details">
        <nav className="breadcrumbs-tab">
          <div className="nav-wrapper">
            <div className="col s12">
              <Link to="/" className="breadcrumb">
                <i className="material-icons">home</i>
              </Link>
              <a href="#!" className="breadcrumb inactive">
                {name}
              </a>
            </div>
          </div>
        </nav>
        <div className="card horizontal">
          <div className="card-image">
            <img src={thumbnail} alt={thumbnail} />
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
              </ul>
            </div>
            <div className="card-content grey lighten-4 list">
              <div
                id="Friends"
                style={{ display: "flex" }}
                className="active tabcontent"
              >
                {friends.length ? (
                  friends.map((name, i) => {
                    return (
                      <span className="new badge" data-badge-caption="" key={i}>
                        {name}
                      </span>
                    );
                  })
                ) : (
                  <p className="nofriends">{`${name} has no Friends`}</p>
                )}
              </div>
              <div
                id="Profession"
                className="tabcontent"
                style={{ display: "none" }}
              >
                {professions.map((name, i) => {
                  return (
                    <span className="new badge" data-badge-caption="" key={i}>
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>
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
  weight: PropTypes.number,
  hair_color: PropTypes.string
};
export default Details;
