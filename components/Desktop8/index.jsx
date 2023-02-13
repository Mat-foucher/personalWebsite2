import React from "react";
import { Link } from "react-router-dom";
import "./Desktop8.css";

function Desktop8(props) {
  const { place1, place2, portfolio, socials, artwork, gallery, ellipse1, successIWillGet, submit } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-8 screen">
        <div className="flex-row-6">
          <div className="ellipse-3-3"></div>
          <h1 className="place-5 syne-normal-web-orange-96px">{place1}</h1>
        </div>
        <div className="overlap-group1-3">
          <div className="flex-col-6">
            <div className="overlap-group2-3">
              <div className="rectangle-2-3"></div>
              <div className="place-6 syne-normal-black-40px">{place2}</div>
            </div>
            <div className="portfolio-3 syne-normal-web-orange-40px">{portfolio}</div>
            <div className="flex-col-item-4 syne-normal-web-orange-40px">{socials}</div>
            <div className="flex-col-item-4 syne-normal-web-orange-40px">{artwork}</div>
            <Link to="/desktop-6">
              <div className="gallery-2 syne-normal-web-orange-40px">{gallery}</div>
            </Link>
            <img className="ellipse-1-3" src={ellipse1} alt="Ellipse 1" />
          </div>
          <p className="success-i-will-get syne-semi-bold-web-orange-36px">{successIWillGet}</p>
          <div className="overlap-group-2">
            <div className="submit-2 syne-normal-black-36px">{submit}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop8;
