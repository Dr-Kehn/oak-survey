import BuildingConfident from "../component/Services/BuildingConfident";
import ServiceCard from "../component/Services/ServiceCard";
import ServiceHero from "../component/Services/ServiceHero";

const Services = () => {
  return (
    <>
      <ServiceHero title="OUR SERVICES" placeDiv={true} />
      <BuildingConfident />
      <ServiceCard />
    </>
  );
};

export default Services;
