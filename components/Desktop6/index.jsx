import React from "react";
import "./Desktop6.css";

function Desktop6(props) {
  const { title, place, portfolio, socials, artwork, gallery, ellipse1, wipPleaseComeBac } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-6 screen">
        <div className="flex-row-10">
          <div className="ellipse-3-6"></div>
          <h1 className="title-3 syne-normal-web-orange-96px">{title}</h1>
        </div>
        <div className="overlap-group-4">
          <div className="flex-col-10">
            <div className="place-9 syne-normal-web-orange-40px">{place}</div>
            <div className="flex-col-item-5 syne-normal-web-orange-40px">{portfolio}</div>
            <div className="flex-col-item-5 syne-normal-web-orange-40px">{socials}</div>
            <div className="flex-col-item-5 syne-normal-web-orange-40px">{artwork}</div>
            <div className="overlap-group1-6">
              <div className="rectangle-3-2"></div>
              <div className="gallery-5 syne-normal-black-40px">{gallery}</div>
            </div>
            <img className="ellipse-1-6" src={ellipse1} alt="Ellipse 1" />
          </div>
          <p className="wip-please-come-bac-1 syne-normal-white-40px">{wipPleaseComeBac}</p>
        </div>
      </div>
    </div>
  );
}

export default Desktop6;
