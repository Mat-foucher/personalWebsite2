import React from "react";
import "./Desktop3.css";

function Desktop3(props) {
  const {
    title,
    place,
    portfolio,
    socials,
    artwork,
    gallery,
    ellipse1,
    generalAssemblyUiUxBootCamp,
    firstFigmaDesignF,
    rectangle21,
    freelanceWorkHarborWebsite,
    seeForYourself,
    wwwHarborBand,
    rectangle24,
    x2BottomOfHomepage,
    x3ShopifyStorefront,
    rectangle23,
    shopifyStorefrontG,
    allMerchandiseSpre,
    customAiGenerated,
    logoWheelAtTheBo,
    rectangle22,
    x1TopOfHomepage,
    number1,
    firstMobileFriendl,
    number2,
    featuresGraphicsMa,
    containsEmbeddedLi,
    number3,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-3 screen">
        <div className="flex-row-3">
          <div className="ellipse-3-2"></div>
          <h1 className="title syne-normal-web-orange-96px">{title}</h1>
        </div>
        <div className="flex-row-4">
          <div className="flex-col-3">
            <div className="place-4 syne-normal-web-orange-40px">{place}</div>
            <div className="overlap-group1-1">
              <div className="rectangle-2-2"></div>
              <div className="portfolio-2 syne-normal-black-40px">{portfolio}</div>
            </div>
            <div className="socials syne-normal-web-orange-40px">{socials}</div>
            <div className="flex-col-item-2 syne-normal-web-orange-40px">{artwork}</div>
            <div className="flex-col-item-2 syne-normal-web-orange-40px">{gallery}</div>
            <img className="ellipse-1-2" src={ellipse1} alt="Ellipse 1" />
          </div>
          <div className="flex-col-4">
            <p className="general-assembly-uiux-boot-camp syne-normal-white-40px">{generalAssemblyUiUxBootCamp}</p>
            <div className="flex-row-5">
              <p className="first-figma-design-f syne-normal-white-20px">{firstFigmaDesignF}</p>
              <img className="rectangle-21" src={rectangle21} alt="Rectangle 21" />
            </div>
            <p className="freelance-work-harbor-website syne-normal-white-40px">{freelanceWorkHarborWebsite}</p>
            <div className="overlap-group4 syne-normal-white-20px">
              <div className="overlap-group6">
                <div className="overlap-group5-1">
                  <div className="overlap-group1-2">
                    <div className="overlap-group2-2">
                      <div className="see-for-yourself">{seeForYourself}</div>
                      <div className="wwwharborband">{wwwHarborBand}</div>
                      <img className="rectangle-24" src={rectangle24} alt="Rectangle 24" />
                      <div className="x2-bottom-of-homepage syne-normal-white-20px">{x2BottomOfHomepage}</div>
                      <div className="x3-shopify-storefront syne-normal-white-20px">{x3ShopifyStorefront}</div>
                    </div>
                    <img className="rectangle-23" src={rectangle23} alt="Rectangle 23" />
                    <p className="shopify-storefront-g">{shopifyStorefrontG}</p>
                    <p className="all-merchandise-spre">{allMerchandiseSpre}</p>
                    <p className="custom-ai-generated">{customAiGenerated}</p>
                    <p className="logo-wheel-at-the-bo">{logoWheelAtTheBo}</p>
                  </div>
                  <img className="rectangle-22" src={rectangle22} alt="Rectangle 22" />
                  <div className="x1-top-of-homepage">{x1TopOfHomepage}</div>
                  <div className="number">{number1}</div>
                </div>
                <div className="flex-col-5">
                  <div className="overlap-group3-1">
                    <p className="first-mobile-friendl">{firstMobileFriendl}</p>
                    <div className="number-1">{number2}</div>
                  </div>
                  <p className="flex-col-item-3">{featuresGraphicsMa}</p>
                  <p className="flex-col-item-3">{containsEmbeddedLi}</p>
                </div>
              </div>
              <div className="number-2">{number3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop3;
