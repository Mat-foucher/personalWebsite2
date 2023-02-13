import React from "react";
import { Link } from "react-router-dom";
import "./Desktop4.css";

function Desktop4(props) {
  const { title, place, portfolio, socials, artwork, gallery, ellipse1, wipPleaseComeBac } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-4 screen">
        <div className="flex-row-7">
          <div className="ellipse-3-4"></div>
          <h1 className="title-1 syne-normal-web-orange-96px">{title}</h1>
        </div>
        <div className="overlap-group-3">
          <div className="flex-col-7">
            <div className="place-7 syne-normal-web-orange-40px">{place}</div>
            <Link to="/desktop-3">
              <div className="portfolio-4 syne-normal-web-orange-40px">{portfolio}</div>
            </Link>
            <div className="overlap-group1-4">
              <div className="rectangle-3"></div>
              <div className="socials-1 syne-normal-black-40px">{socials}</div>
            </div>
            <div className="artwork syne-normal-web-orange-40px">{artwork}</div>
            <div className="gallery-3 syne-normal-web-orange-40px">{gallery}</div>
            <img className="ellipse-1-4" src={ellipse1} alt="Ellipse 1" />
          </div>
          <p className="wip-please-come-bac syne-normal-white-40px">{wipPleaseComeBac}</p>
        </div>
      </div>
    </div>
  );
}

export default Desktop4;
