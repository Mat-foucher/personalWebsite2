import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop9 from "./components/Desktop9";
import Desktop2 from "./components/Desktop2";
import Desktop3 from "./components/Desktop3";
import Desktop8 from "./components/Desktop8";
import Desktop4 from "./components/Desktop4";
import Desktop5 from "./components/Desktop5";
import Desktop6 from "./components/Desktop6";
import Desktop1 from "./components/Desktop1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/desktop-9">
          <Desktop9 {...desktop9Data} />
        </Route>
        <Route path="/desktop-2">
          <Desktop2 {...desktop2Data} />
        </Route>
        <Route path="/desktop-3">
          <Desktop3 {...desktop3Data} />
        </Route>
        <Route path="/desktop-8">
          <Desktop8 {...desktop8Data} />
        </Route>
        <Route path="/desktop-4">
          <Desktop4 {...desktop4Data} />
        </Route>
        <Route path="/desktop-5">
          <Desktop5 {...desktop5Data} />
        </Route>
        <Route path="/desktop-6">
          <Desktop6 {...desktop6Data} />
        </Route>
        <Route path="/:path(|desktop-1)">
          <Desktop1 {...desktop1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const desktop9Data = {
    place1: "CONTACT",
    place2: "Contact",
    portfolio: "Portfolio",
    socials: "Socials",
    artwork: "Artwork",
    gallery: "Gallery",
    ellipse1: "/img/ellipse-1@2x.png",
    errorYourEmailHasNotBeenSent: "ERROR: Your Email has not been sent.",
    submit: "Submit",
};

const desktop2Data = {
    place1: "CONTACT",
    place2: "Contact",
    portfolio: "Portfolio",
    socials: "Socials",
    artwork: "Artwork",
    gallery: "Gallery",
    ellipse1: "/img/ellipse-1@2x.png",
    yourName: "Your Name:",
    inputType1: "text",
    inputPlaceholder1: "Mathieu",
    yourEmail: "Your Email:",
    inputType2: "email",
    inputPlaceholder2: "Mathieu",
    yourMessage: "Your Message:",
    inputType3: "text",
    inputPlaceholder3: "How are you today?",
    submit: "Submit",
};

const desktop3Data = {
    title: "PORTFOLIO",
    place: "Contact",
    portfolio: "Portfolio",
    socials: "Socials",
    artwork: "Artwork",
    gallery: "Gallery",
    ellipse1: "/img/ellipse-1@2x.png",
    generalAssemblyUiUxBootCamp: "General Assembly - UI/UX Boot Camp:",
    firstFigmaDesignF: "First Figma design from the General Assembly UX/UI Design Boot-camp, 2022-2023",
    rectangle21: "/img/rectangle-21.png",
    freelanceWorkHarborWebsite: "Freelance Work - Harbor Website:",
    seeForYourself: "See For Yourself:",
    wwwHarborBand: "www.harbor.band",
    rectangle24: "/img/rectangle-24.png",
    x2BottomOfHomepage: "2: Bottom of homepage.",
    x3ShopifyStorefront: "3: Shopify storefront.",
    rectangle23: "/img/rectangle-23.png",
    shopifyStorefrontG: "Shopify storefront given custom theme in CSS files for seamless transition from homepage.",
    allMerchandiseSpre: "All Merchandise spread design done in photoshop.",
    customAiGenerated: "Custom AI generated iconography for artist theme.",
    logoWheelAtTheBo: "Logo wheel at the bottom of the homepage is a spinning GIF made in Adobe After Effects.",
    rectangle22: "/img/rectangle-22.png",
    x1TopOfHomepage: "1: Top of homepage.",
    number1: "3",
    firstMobileFriendl: "First mobile friendly website I have made.",
    number2: "1",
    featuresGraphicsMa: "Features graphics made in Adobe Photoshop, all vectored for compatibility on mobile devices.",
    containsEmbeddedLi: "Contains embedded links and various API for artist music and concert schedule, as well as online Shopify store.",
    number3: "2",
};

const desktop8Data = {
    place1: "CONTACT",
    place2: "Contact",
    portfolio: "Portfolio",
    socials: "Socials",
    artwork: "Artwork",
    gallery: "Gallery",
    ellipse1: "/img/ellipse-1@2x.png",
    successIWillGet: "Success! I will get back to you shortly.",
    submit: "Submit",
};

const desktop4Data = {
    title: "SOCIALS",
    place: "Contact",
    portfolio: "Portfolio",
    socials: "Socials",
    artwork: "Artwork",
    gallery: "Gallery",
    ellipse1: "/img/ellipse-1@2x.png",
    wipPleaseComeBac: "WIP, please come back here to see my social media.",
};

const desktop5Data = {
    title: "ARTWORK",
    place: "Contact",
    portfolio: "Portfolio",
    socials: "Socials",
    artwork: "Artwork",
    gallery: "Gallery",
    ellipse1: "/img/ellipse-1@2x.png",
    albumArtwork: "Album Artwork:",
    rectangle25: "/img/rectangle-25.png",
    singleArtworkFor: "Single artwork for “The Silver Demon (playthrough remix)” by Calcaire.",
};

const desktop6Data = {
    title: "GALLERY",
    place: "Contact",
    portfolio: "Portfolio",
    socials: "Socials",
    artwork: "Artwork",
    gallery: "Gallery",
    ellipse1: "/img/ellipse-1@2x.png",
    wipPleaseComeBac: "WIP, please come back here to see mountain pictures.",
};

const desktop1Data = {
    ellipse2: "/img/ellipse-2@2x.png",
    place: "Contact",
    portfolio: "Portfolio",
    socials: "Socials",
    artwork: "Artwork",
    gallery: "Gallery",
    ellipse1: "/img/ellipse-1-1@2x.png",
    accomplishments: "Accomplishments",
    cuBoulderCollegeO: "CU Boulder College of Arts & Sciences Dean’s List (2020/2021).",
    colorado14ErsIniti: "Colorado 14ers Initiative Outstanding Employee Bonus recipient.",
    releasedOneFullLe: "Released one full length album and one EP as a solo artist and producer (2020, 2022).",
    carriedA60LbStee: "Carried a 60 lb steel rod to 14,012’ above sea level (2022).",
    completedHalfOfTh: "Completed half of the roach traverses (2022).",
    minneapolisLoppetT: "Minneapolis Loppet Trail Ultra Top 50 (2022).",
    title: "MATHIEU FOUCHER",
    uiUxFullStackDe: "UI/UX, Full Stack Development, Front End Design/Development",
    skillsInUiUxAndBeyond: "/img/skills-in-ui-ux-and-beyond-.png",
    figma: "FIGMA",
    react: "REACT",
    html: "HTML",
    css: "CSS",
    wireframes: "WIREFRAMES",
    python: "PYTHON",
    adobe: "ADOBE",
    finalCut: "FINAL CUT",
    github: "GITHUB",
    c: "C++",
    jira: "JIRA",
    javascript: "JAVASCRIPT",
    educationAndCertificates: "/img/education-and-certificates-.png",
    x20172021Univers: "2017 - 2021: University of Colorado at Boulder, Mathematics BA.",
    x20222023General: "2022 - 2023: General Assembly, Certificate in UI/UX Design.",
    relevantWorkExperience: "/img/relevant-work-experience-.png",
    x2018EvidenceAnaly: "2018: Evidence Analyst - Nagrastar. Lakewood, CO",
    oversawTheDueProc: <React.Fragment>Oversaw the due process of mailing court summons and gathering evidence on over<br />200 known thieves of satellite signal piracy .</React.Fragment>,
    documentedAndArchi: "Documented and archived said cases in over 250 detailed reports",
    x20182021Teachin: "2018 - 2021: Teaching/Learning Assistant - CU Boulder. Boulder, CO.",
    spanText1: <React.Fragment>Assisted and oversaw implementation of 20+ lesson plans in multiple subjects with <br /></React.Fragment>,
    spanText2: "over 100 students a semester in over 20 degree programs.",
    offeredPrivateTuto: "Offered private tutoring and improved 20+ student grades by an avergage of +40%.",
    designedAndFacilit: "Designed and facilitated study plans/procedures in all levels of calculus through the math department at CU Boulder.",
    x20212022FullSt: "2021 - 2022: Full Stack Software Engineer - Nagrastar. Lakewood, CO.",
    designedAndImpleme: <React.Fragment>Designed and implemented 16+ features for an application that serves 1000+ clients<br />on a daily basis.</React.Fragment>,
    x20222023Freelance: "2022-2023: Freelance Work - Self. Lakewood, CO.",
    spanText3: <React.Fragment>Worked with a graphic designer to create an online store for a musical artist<br />visible by over 7000+ </React.Fragment>,
    spanText4: "fans.",
    managedAShopifySt: "Managed a Shopify store generating 100 - 700$ in a single month.",
    createdAFullyCust: "Created a fully custom webpage without existing templates and advanced API.",
};

