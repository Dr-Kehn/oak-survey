import GetInTouch from "../GetInTouch";
import OurServicesIntro from "../OurServicesIntro";
import ServiceParagraph from "../ServiceParagraph";
import ServicesImg from "../ServicesImg";
import ServicesList from "../ServicesList";
import ServicesTitle from "../ServicesTitle";

function SiteSurveyComps() {
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Site Survey in Ireland" />
      <ServiceParagraph text="At Oak Surveys, we believe that every successful design and construction project begins with a precise understanding of the site. A site survey provides accurate data about land features, boundaries, levels, and existing infrastructure — forming the foundation for safe, efficient, and compliant project planning." />
      <ServiceParagraph text="Whether it's for a new development, renovation, or infrastructure project, our site surveys deliver reliable measurements that help clients make informed decisions and avoid costly errors during construction." />

      <ServicesImg img={["/site Survey 1.svg", "/site survey 2.svg"]} />

      <ServicesTitle text="Our Expertise" />
      <ServiceParagraph text="Oak Surveys offers professional site surveying services across Ireland for residential, commercial, and industrial projects. We provide detailed spatial data and topographic information tailored to each project’s needs — from boundary verification and contour mapping to utility identification and construction layout." />
      <ServiceParagraph text="Our skilled team uses the latest surveying technology to produce clear, precise, and fully geo-referenced results that support planning, engineering, and legal documentation." />
      <ServiceParagraph text="Our services include: " />

      <ServicesList
        type
        services={[
          "Topographic and boundary mapping",
          "Site layout and control point establishment",
          "Utility and drainage surveys",
          "Volume and contour analysis",
          "Pre- and post-construction verification",
        ]}
      />

      <ServicesTitle text="Our Site Survey Process" />

      <ServiceParagraph text="At Oak Surveys, accuracy and efficiency drive our process. We begin with a full site inspection and data capture using GPS, total stations, and laser scanning equipment." />

      <ServiceParagraph text="Our process includes:" />

      <ServicesList
        services={[
          "Pre-survey Assessment – Reviewing project plans and site conditions to determine the right survey method.",
          "Data Capture – Using advanced instruments to record site levels, boundaries, and features.",
          "Data Processing & Mapping – Converting field data into detailed digital maps and models.",
          "Verification – Cross-checking results for consistency and compliance with Irish surveying standards.",
        ]}
      />

      <ServiceParagraph text="We ensure seamless communication with engineers, architects, and developers to keep projects coordinated and error-free from start to finish." />

      <ServicesTitle text="Why Setting Out Matters" />
      <ServiceParagraph text="Accurate site data is critical to project success. Poorly executed surveys can lead to boundary disputes, design errors, and costly rework during construction." />
      <ServiceParagraph text="By partnering with Oak Surveys, you benefit from: " />
      <ServicesList
        type
        services={[
          "Reliable and precise data for design and planning",
          "Reduced project risks and errors",
          "Faster project approval and compliance",
          "Informed, data-driven decision-making",
        ]}
      />

      <ServicesTitle text="Why Choose Oak surveys" />
      <ServiceParagraph text="At Oak Surveys, we combine technical expertise with local experience to deliver dependable results. Our team upholds the highest standards of professionalism, precision, and client satisfaction." />
      <ServiceParagraph text="We prioritize: " />
      <ServicesList
        services={[
          "Accuracy and attention to detail",
          "Transparent communication",
          "On-time project delivery",
          "Compliance with Irish survey regulations",
        ]}
      />
      <ServiceParagraph text="Whether it’s a small residential plot or a large commercial site, we ensure your project starts with the right information." />

      <GetInTouch />
    </div>
  );
}

export default SiteSurveyComps;
