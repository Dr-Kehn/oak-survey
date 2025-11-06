import { useState } from "react";
import OurServicesIntro from "../OurServicesIntro";
import { FaMinus, FaPlus } from "react-icons/fa";
import ServicesTitle from "../ServicesTitle";
import GetInTouch from "../GetInTouch";
import ServiceParagraph from "../ServiceParagraph";
import ServicesImg from "../ServicesImg";
import ServicesList from "../ServicesList";

function ThreeDComp() {
  const faq = [
    {
      question: "Can you scan both indoor and outdoor environments?",
      answer:
        "Yes. We perform scans in buildings, open sites, industrial facilities, and even hard-to-access areas.",
    },
    {
      question: "What deliverables will I receive?",
      answer:
        "Depending on your needs, we provide point clouds, 2D CAD drawings, BIM models (Revit, IFC), or photo-realistic 3D visualisations.",
    },
    {
      question: "Do you handle large-scale or remote sites across Ireland?",
      answer:
        "Yes, our mobile scanning unit and survey teams operate nationwide, including complex terrain and remote project sites.",
    },
    {
      question: "How do I get a quotation?",
      answer:
        "Simply contact us with your project details — location, scope, and deliverables — and our engineers will provide a clear, itemised quote.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="What Is 3D Scanning? " />
      <ServiceParagraph text="At Oak surveys, we harness advanced 3D laser scanning technology to deliver precise, data-rich models of real-world environments. Our 3D scanning service transforms physical spaces, from complex industrial facilities to heritage buildings  into highly detailed digital replicas that form the foundation for accurate design, planning, and analysis." />
      <ServiceParagraph text="This process uses millions of laser points to capture exact spatial information. The data is processed into what’s known as a point cloud, which can then be converted into 2D drawings, BIM models, or high-resolution 3D visualizations." />
      <ServiceParagraph text="Whether you are planning renovations, verifying as-built conditions, or documenting historic architecture, our 3D scanning service ensures complete accuracy and efficiency across all stages of your project." />

      <ServicesImg img={["/scanner 1.svg", "/scanner 2.svg"]} />

      <ServicesTitle text="Why Use 3D Scanning?" />
      <ServiceParagraph text="3D scanning provides a faster, more reliable alternative to traditional surveying. It eliminates manual measurement errors and produces visual, measurable digital data that’s easy to share and integrate into your workflow." />
      <ServiceParagraph text="At Oak surveys, we prioritize accuracy, detail, and speed, enabling you to make confident design and construction decisions backed by dependable spatial data." />

      <ServicesTitle text="What Our 3D Scanning Can Be Used For" />
      <ServiceParagraph text="Our scanning and modelling solutions can be adapted for a wide range of applications, including:" />
      <ServicesList
        type
        services={[
          "Measured Building Surveys: Capture precise dimensions and spatial layouts.",
          "As-Built Verification: Compare design intent with completed work.",
          "Architectural Documentation: Record complex structures or heritage sites.",
          "Engineering Surveys: Produce data for plant, machinery, or civil structures.",
          "Topographic and Volumetric Surveys: Accurately calculate terrain levels and material quantities.",
          "Deformation Monitoring: Track movement or settlement over time.",
          "Restoration & Conservation Projects: Document fine architectural details without physical contact.",
        ]}
      />

      <ServicesTitle text="Our Technology" />
      <ServiceParagraph text="To deliver consistent results, we utilize the Leica BLK360, a compact but powerful 3D laser scanner renowned for its accuracy and speed. With a single button press, it captures millions of data points alongside panoramic imagery, producing a colourized, high-resolution point cloud of your site." />
      <ServiceParagraph text="This technology allows our team to work efficiently in both interior and exterior environments, even under challenging conditions reducing site time while improving overall accuracy and project insight." />

      <GetInTouch />

      <ServicesTitle text="Frequently Asked Questions" />
      <div className="space-y-2">
        {faq.map((item, index) => (
          <div key={index} className="border-b border-neutral">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center gap-4 px-5 py-7 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              aria-expanded={openIndex === index}
            >
              <span className="leading-relaxed sm:leading-8 lg:leading-9 font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem]">
                {item.question}
              </span>
              <span
                className={`p-3 sm:p-4 rounded-full shrink-0 transition-colors ${
                  openIndex === index ? "bg-brand-main" : "bg-neutral"
                }`}
              >
                {openIndex === index ? (
                  <FaMinus className="text-white text-sm sm:text-base" />
                ) : (
                  <FaPlus className="text-sm sm:text-base" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-7 pt-2 animate-fadeIn">
                <p className="leading-relaxed sm:leading-8 lg:leading-9 font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] ">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreeDComp;
