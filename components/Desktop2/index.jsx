import React from "react";
import { Link } from "react-router-dom";
import "./Desktop2.css";

function Desktop2(props) {
  const {
    place1,
    place2,
    portfolio,
    socials,
    artwork,
    gallery,
    ellipse1,
    yourName,
    inputType1,
    inputPlaceholder1,
    yourEmail,
    inputType2,
    inputPlaceholder2,
    yourMessage,
    inputType3,
    inputPlaceholder3,
    submit,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="desktop-2 screen" name="form1" action="form1" method="post">
        <div className="flex-row-1">
          <div className="ellipse-3-1"></div>
          <h1 className="place-2 syne-normal-web-orange-96px">{place1}</h1>
        </div>
        <div className="flex-row-2">
          <div className="flex-col-1">
            <div className="overlap-group5">
              <div className="rectangle-2-1"></div>
              <div className="place-3 syne-normal-black-40px">{place2}</div>
            </div>
            <div className="portfolio-1 syne-normal-web-orange-40px">{portfolio}</div>
            <div className="flex-col-item-1 syne-normal-web-orange-40px">{socials}</div>
            <div className="flex-col-item-1 syne-normal-web-orange-40px">{artwork}</div>
            <Link to="/desktop-6">
              <div className="gallery-1 syne-normal-web-orange-40px">{gallery}</div>
            </Link>
            <img className="ellipse-1-1" src={ellipse1} alt="Ellipse 1" />
          </div>
          <div className="flex-col-2">
            <div className="overlap-group3">
              <div className="your-name syne-semi-bold-web-orange-36px">{yourName}</div>
              <input
                className="mathieu syne-normal-white-36px"
                name="mathieu"
                placeholder={inputPlaceholder1}
                type={inputType1}
                required
              />
            </div>
            <div className="mail-container">
              <div className="your-email syne-semi-bold-web-orange-36px">{yourEmail}</div>
              <input
                className="somebodygmailcom syne-normal-white-36px"
                name="somebodygmailcom"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              />
            </div>
            <div className="overlap-group2-1">
              <div className="your-message syne-semi-bold-web-orange-36px">{yourMessage}</div>
              <textarea
                className="how-are-you-today syne-normal-white-36px"
                name="howareyoutoday"
                placeholder={inputPlaceholder3}
                type={inputType3}
                required
              ></textarea>
            </div>
            <a href="javascript:SubmitForm('form1')">
              <div className="submit-button">
                <div className="overlap-group-1">
                  <div className="submit-1 syne-normal-black-36px">{submit}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Desktop2;
