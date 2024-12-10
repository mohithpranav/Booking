import { ColumnoneImage } from "../constants";
import { ColumntwoImage } from "../constants";
import {
  searchBar,
  location,
  insurance,
  searchbarwhite,
} from "../assets/icons";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <header className="hero-section-container ">
      <div className="columns-container">
        <div className="column-one">
          {ColumnoneImage.map((item, index) => (
            <img key={index} src={item.imgURL} alt={`Image ${index}`} />
          ))}
        </div>
        <div className="column-two">
          {ColumntwoImage.map((item, index) => (
            <img key={index} src={item.imgURL} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
      <div className="text-container">
        <h3>
          Book an appointment with{" "}
          <span className="highlight-text">lifestyle medicine</span> experts
        </h3>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>
      <div className="custom-div">
        <div className="input-container">
          <img src={searchBar} alt="Search" className="input-icon" />
          <input
            type="text"
            placeholder="Condition, procedure, speciality..."
            className="text-box"
          />
        </div>
        <div className="input-container">
          <img src={location} alt="location" className="input-icon" />
          <input
            type="text"
            placeholder="City, state, or zipcode"
            className="text-box"
          />
        </div>
        <div className="input-container">
          <img src={insurance} alt="insurance" className="input-icon" />
          <input
            type="text"
            placeholder="Insurance carrier"
            className="text-box"
          />
        </div>
        <div className="input-container">
          <img src={searchbarwhite} alt="Find now" className="input-icon" />
          <button className="custom-button">Find now</button>
        </div>
      </div>
      <div className="tilted-line"></div>
      <div className="empty-div"></div>
    </header>
  );
};

export default HeroSection;
