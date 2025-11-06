import GetInTouch from "../GetInTouch";
import OurServicesIntro from "../OurServicesIntro";
import ServiceParagraph from "../ServiceParagraph";
import ServicesList from "../ServicesList";
import ServicesTitle from "../ServicesTitle";

function IrishWaterComp() {
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Irish Water Compliance Documentation" />
      <ServiceParagraph text="At OAK SURVEYS, we assist developers, engineers, and contractors in preparing and submitting all required documentation for Irish Water compliance. Our team ensures that your project meets national water and wastewater standards from design through to final approval." />
      <ServiceParagraph text="We provide accurate, regulation-ready drawings and reports that align with Irish Water’s Code of Practice and Standard Details — helping you avoid costly delays and resubmissions." />

      <img
        className="mt-10 lg:mt-20"
        src={"/Men laying Pipe.svg"}
        alt="Men laying Pipe"
      />

      <ServicesTitle text="Our Process" />
      <ServiceParagraph text="We begin by reviewing your site layout and proposed service connections to identify key compliance requirements. From there, our survey and design specialists prepare detailed documentation, including: " />
      <ServicesList
        type
        services={[
          "Watermain layout drawings",
          "Foul and surface water drainage designs",
          "Connection applications and as-built surveys",
          "Pre-connection and post-connection reports",
          "Compliance certificates and supporting documentation",
        ]}
      />
      <ServiceParagraph text="Every submission is checked for accuracy and alignment with local authority and Irish Water specifications before submission." />

      <ServicesTitle text="Why It Matters" />
      <ServiceParagraph text="Proper Irish Water documentation is essential for project approval and utility connection. At OAK SURVEYS, we make this process seamless — ensuring your designs are not only compliant but also efficient and sustainable for long-term performance." />

      <GetInTouch />
    </div>
  );
}

export default IrishWaterComp;
