import GetInTouch from "../GetInTouch";
import OurServicesIntro from "../OurServicesIntro";
import ServiceParagraph from "../ServiceParagraph";
import ServicesImg from "../ServicesImg";
import ServicesTitle from "../ServicesTitle";

function DroneMappingComp() {
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Drone Mapping in Ireland" />
      <ServiceParagraph text="At OAK SURVEYS, we harness the power of drone technology to deliver fast, accurate, and detailed aerial data for projects of all sizes. Our drone mapping services provide high-resolution imagery, 3D terrain models, and topographic maps that help engineers, developers, and construction professionals make informed decisions with confidence." />
      <ServiceParagraph text="By combining aerial precision with advanced photogrammetry and GPS positioning, we capture real-time site conditions safely and efficiently — reducing time spent on the ground while maintaining the highest standards of accuracy." />

      <ServicesImg
        img={["/gray colored drone.svg", "/white colored drone.svg"]}
      />

      <ServicesTitle text="Our Approach to Drone Mapping" />
      <ServiceParagraph text="We begin with a thorough site assessment to determine the most effective flight paths, camera settings, and ground control points. Using state-of-the-art drones, we capture overlapping aerial images that are processed into accurate maps, elevation models, and contour data." />
      <ServiceParagraph text="Our team of qualified surveyors and drone pilots ensures that every dataset meets Irish geospatial and regulatory standards, delivering outputs that are reliable and ready for use in planning, design, and construction monitoring." />

      <ServicesTitle text="Regulatory Compliance and Approvals" />
      <ServiceParagraph text="All drone operations at OAK SURVEYS are conducted in full compliance with Irish Aviation Authority (IAA) regulations. Our pilots are fully licensed and insured, and we follow strict safety and environmental procedures to ensure every operation is safe, legal, and responsible." />
      <ServiceParagraph text="We also maintain data security and privacy standards, ensuring all collected information is handled professionally and confidentially." />

      <GetInTouch />
    </div>
  );
}

export default DroneMappingComp;
