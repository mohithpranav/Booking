import "./ServiceCard.css";
import PropTypes from "prop-types";

const ServiceCard = ({ imgURL, title, description }) => {
  return (
    <div className="service-card-container">
      <div className="service-card-img">
        <img src={imgURL} alt={title} />
      </div>
      <div className="service-card-content">
        <h3 className="service-card-tittle">{title}</h3>
        <p className="service-card-description">{description}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
