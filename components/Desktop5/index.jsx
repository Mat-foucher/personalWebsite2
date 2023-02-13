import React from "react";
import { Link } from "react-router-dom";
import "./Desktop5.css";

function Desktop5(props) {
  const {
    title,
    place,
    portfolio,
    socials,
    artwork,
    gallery,
    ellipse1,
    albumArtwork,
    rectangle25,
    singleArtworkFor,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-5 screen">
        <div className="flex-row-8">
          <div className="ellipse-3-5"></div>
          <h1 className="title-2 syne-normal-web-orange-96px">{title}</h1>
        </div>
        <div className="flex-row-9">
          <div className="flex-col-8">
            <div className="place-8 syne-normal-web-orange-40px">{place}</div>
            <Link to="/desktop-3">
              <div className="portfolio-5 syne-normal-web-orange-40px">{portfolio}</div>
            </Link>
            <div className="socials-2 syne-normal-web-orange-40px">{socials}</div>
            <div className="overlap-group1-5">
              <div className="rectangle-3-1"></div>
              <div className="artwork-1 syne-normal-black-40px">{artwork}</div>
            </div>
            <div className="gallery-4 syne-normal-web-orange-40px">{gallery}</div>
            <img className="ellipse-1-5" src={ellipse1} alt="Ellipse 1" />
          </div>
          <div className="flex-col-9">
            <div className="album-artwork syne-normal-white-40px">{albumArtwork}</div>
            <img className="rectangle-25" src={rectangle25} alt="Rectangle 25" />
            <p className="single-artwork-for syne-normal-white-20px">{singleArtworkFor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop5;
