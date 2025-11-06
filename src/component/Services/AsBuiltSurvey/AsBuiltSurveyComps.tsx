import GetInTouch from "../GetInTouch";
import OurServicesIntro from "../OurServicesIntro";
import ServiceParagraph from "../ServiceParagraph";
import ServicesImg from "../ServicesImg";
import ServicesList from "../ServicesList";
import ServicesTitle from "../ServicesTitle";

function AsBuiltSurveyComps() {
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="As-Built Surveys" />
      <ServiceParagraph text="At OAK SURVEYS, we provide precise as-built surveys that capture the true, on-ground conditions of completed or ongoing projects. These surveys are essential for verifying construction accuracy, ensuring compliance with design specifications, and supporting handover documentation." />
      <ServiceParagraph text="Using advanced surveying instruments and drone mapping technology, our team records detailed measurements of buildings, utilities, roads, and infrastructure. The resulting data is processed into accurate as-built drawings and 3D models, clearly showing any deviations from original plans." />

      <ServicesImg img={["/built survey 1.svg", "/built survey 2.svg"]} />

      <ServicesTitle text="Our Process" />
      <ServiceParagraph text="We conduct comprehensive site measurements using total stations, GPS, and laser scanning tools, ensuring every structure and feature is accurately represented. Our outputs include: " />
      <ServicesList
        type
        services={[
          "As-built site plans and elevations",
          "Utility mapping (water, drainage, electrical)",
          "Road and infrastructure verification",
          "Compliance reports for local authority submission",
        ]}
      />

      <ServicesTitle text="Why It Matters" />
      <ServiceParagraph text="As-built surveys provide a reliable record for future maintenance, asset management, and project certification. With OAK SURVEYS, you can trust in a fast, compliant, and data-driven process that meets Irish construction and engineering standards." />

      <GetInTouch />
    </div>
  );
}

export default AsBuiltSurveyComps;
