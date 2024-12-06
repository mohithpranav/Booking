import ServiceCard from "../components/ServiceCard/ServiceCard";
import { sixpillars } from "../constants";

const Services = () => {
  return (
    <div className="services-container">
      {sixpillars.map((pillar, index) => (
        <ServiceCard
          key={index}
          imgURL={pillar.imgURL}
          title={pillar.title}
          description={pillar.description}
        />
      ))}
    </div>
  );
};

export default Services;
