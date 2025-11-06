import GetInTouch from "../GetInTouch";
import OurServicesIntro from "../OurServicesIntro";
import ServiceParagraph from "../ServiceParagraph";
import ServicesImg from "../ServicesImg";
import ServicesList from "../ServicesList";
import ServicesTitle from "../ServicesTitle";

function ForestryComp() {
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Forest Road Planning in Ireland" />
      <ServiceParagraph text="At Oak Surveys, we understand that well-planned forest roads are the foundation for efficient forest management, timber production, and environmental conservation. Forest roads provide essential access for activities such as timber harvesting, transportation, fire control, and eco-tourism. When designed and constructed properly, they not only improve accessibility but also help prevent erosion and environmental degradation." />
      <ServiceParagraph text="Our forest road planning services combine technical expertise with sustainable engineering practices to ensure that every project is safe, durable, and compliant with environmental and forestry regulations in Ireland. We focus on cost-effective solutions that maintain the balance between accessibility, safety, and ecological preservation." />

      <ServicesImg img={["/forest1.svg", "/forest2.svg"]} />

      <ServicesTitle text="Our Approach to Forest Road Planning" />
      <ServiceParagraph text="At Oak surveys, we take a comprehensive and systematic approach to forest road design. Each project begins with a detailed site survey and topographic assessment to understand the terrain, soil conditions, drainage patterns, and vegetation. This allows us to design access routes that minimize disturbance to natural habitats while maintaining structural integrity and long-term usability." />
      <ServiceParagraph text="We handle the entire process —from initial site survey and mapping to design documentation and supervision of construction. Our engineers and surveyors ensure that every road and forest entrance meets the required safety, engineering, and environmental standards." />
      <ServiceParagraph text="Our services include:" />
      <ServicesList
        type
        services={[
          "Site analysis and feasibility studies",
          "Design of road alignments and forest entrances",
          "Preparation of engineering drawings and documentation",
          "Drainage and erosion control planning",
          "Construction supervision and certification",
        ]}
      />

      <ServicesTitle text="Regulatory Compliance and Approvals" />
      <ServiceParagraph text="In Ireland, all forestry and environmental infrastructure projects are closely regulated to ensure sustainability and compliance with national standards. At OAK SURVEYS, we work directly with relevant authorities — including the Department of Agriculture, Food and the Marine and local forestry divisions — to guarantee that every project meets environmental and regulatory requirements." />
      <ServiceParagraph text="We assist clients in preparing and submitting key documentation, such as:" />
      <ServicesList
        services={[
          "Environmental Impact Assessments (EIA)",
          "Road and drainage design reports",
          "Site layout and boundary plans",
          "Safety and access assessments",
        ]}
      />
      <ServiceParagraph text="With OAK SURVEYS managing your submissions and liaising with the authorities, you can trust in a smooth, transparent, and fully compliant approval process from start to finish" />

      <ServicesTitle text="Forest Road Design & Certification" />
      <ServiceParagraph text="Upon completion of construction, Oak surveys provides independent inspection and certification to confirm that all works have been executed in line with approved plans and environmental standards." />
      <ServiceParagraph text="Our engineers conduct detailed assessments, evaluating road stability, drainage systems, slope protection, and surface quality before issuing a Certificate of Completion. Where adjustments or remedial actions are required, we provide a detailed report highlighting the issues and recommended corrections to ensure compliance and long-term road safety." />

      <GetInTouch />
    </div>
  );
}

export default ForestryComp;
