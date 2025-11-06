import OurServicesIntro from "../OurServicesIntro";
import ServiceParagraph from "../ServiceParagraph";
import ServicesImg from "../ServicesImg";
import ServicesTitle from "../ServicesTitle";

function LandRegistryComp() {
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Secure Your Property with Precision and Compliance" />
      <ServiceParagraph text="Owning land or property in Ireland involves more than holding a deed — it requires official registration with the Property Registration Authority (PRA). A Land Registry–Compliant Map is an essential part of this process, offering a precise, legally recognized depiction of your property boundaries." />
      <ServiceParagraph text="At OAK SURVEYS, we produce accurate, PRA-compliant maps that fully meet technical and legal standards. Whether you’re registering new land, resolving boundary discrepancies, or subdividing property, our experts ensure every map is clear, precise, and ready for seamless approval." />

      <ServicesImg img={["/Land 1.svg", "/Land 2.svg"]} />

      <ServicesTitle text="When You Might Need a Land Registry–Compliant Map" />
      <ServiceParagraph text="A land registry compliant map is often required for several situations involving property ownership or transfer. For example, if you’ve just purchased a new home or plot of land, your solicitor will need to submit a First Registration of Title to the PRA, and that process cannot be completed without an approved map." />
      <ServiceParagraph text="You may also need one if you are subdividing your property, transferring a portion of land, registering an access route or right of way, or selling land that has never been registered before. In all these cases, the map serves as verified evidence of the property’s exact boundaries and measurements" />

      <ServicesTitle text="How Oak Surveys & Engineering Services Can Help" />
      <ServiceParagraph text="At Oak surveys, we combine professional expertise with modern surveying technology to ensure your mapping process is both accurate and stress-free. Our engineers start by reviewing any existing property maps or documents you may have. If required, we carry out a detailed land survey to confirm boundaries, check for discrepancies, and record the precise dimensions of your site." />
      <ServiceParagraph text="Once all data is gathered, our team compares it with official registry records to identify and resolve any inconsistencies. We then prepare a Land Registry Compliant Map that meets all PRA requirements. The final document is reviewed with you and your solicitor before being certified by one of our qualified chartered engineers." />

      <ServicesTitle text="Cost and Project Process" />
      <ServiceParagraph text="Every property is unique, and the cost of a compliant map depends on factors such as site size, accessibility, and complexity. At Oak surveys, we maintain transparent pricing — our rates are competitive and tailored to your specific project needs. After reviewing your site details, we’ll provide a clear quote and timeline before any work begins." />
    </div>
  );
}

export default LandRegistryComp;
