import React from "react";
import { Link } from "react-router-dom";
import "./Desktop9.css";

function Desktop9(props) {
  const {
    place1,
    place2,
    portfolio,
    socials,
    artwork,
    gallery,
    ellipse1,
    errorYourEmailHasNotBeenSent,
    submit,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-9 screen">
        <div className="flex-row">
          <div className="ellipse-3"></div>
          <h1 className="place syne-normal-web-orange-96px">{place1}</h1>
        </div>
        <div className="overlap-group1">
          <div className="flex-col">
            <div className="overlap-group2">
              <div className="rectangle-2"></div>
              <div className="place-1 syne-normal-black-40px">{place2}</div>
            </div>
            <div className="portfolio syne-normal-web-orange-40px">{portfolio}</div>
            <div className="flex-col-item syne-normal-web-orange-40px">{socials}</div>
            <div className="flex-col-item syne-normal-web-orange-40px">{artwork}</div>
            <Link to="/desktop-6">
              <div className="gallery syne-normal-web-orange-40px">{gallery}</div>
            </Link>
            <img className="ellipse-1" src={ellipse1} alt="Ellipse 1" />
          </div>
          <p className="error-your-email-has-not-been-sent syne-semi-bold-web-orange-36px">
            {errorYourEmailHasNotBeenSent}
          </p>
          <div className="overlap-group">
            <div className="submit syne-normal-black-36px">{submit}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop9;
