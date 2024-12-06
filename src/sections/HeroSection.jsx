import { ColumnoneImage } from "../constants";
import { ColumntwoImage } from "../constants";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <header className="hero-section-container">
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
        <h1>Book an appointment with lifestyle medicine experts</h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>
    </header>
  );
};

export default HeroSection;
