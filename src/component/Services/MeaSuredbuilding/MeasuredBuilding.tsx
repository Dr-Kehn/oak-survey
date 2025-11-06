import { useState } from "react";
import OurServicesIntro from "../OurServicesIntro";
import { FaMinus, FaPlus } from "react-icons/fa";
import ServicesTitle from "../ServicesTitle";
import ServiceParagraph from "../ServiceParagraph";
import ServicesImg from "../ServicesImg";
import ServicesList from "../ServicesList";

function MeasuredBuildingComp() {
  const faq = [
    {
      question: "What is a measured building survey?",
      answer:
        "A measured building survey is a precise recording of an existing building’s geometry and features. It captures internal and external dimensions, levels, openings, structural elements and fixed services so architects and engineers can work from an accurate “as-built” model.",
    },
    {
      question: "Why do I need one?",
      answer:
        "It’s vital for design, renovation, or legal documentation, ensuring that your plans match the true dimensions of your property.",
    },
    {
      question: "How long does it take?",
      answer:
        "Typical residential/small commercial buildings: 1–3 days on site and 2–7 days processing. Large or complex buildings (multi-storey, industrial): longer. We give a timeline in the quotation.",
    },
    {
      question: "What if I need revisions after receiving the survey?",
      answer:
        "Minor clarifications are included. For additional site visits or major changes, we provide a costed revision on request. We aim for clarity at handover to minimise rework.",
    },
    {
      question: "How do I get started and what’s the lead time?",
      answer:
        "Contact us with project details (address, building size, purpose of survey). For standard projects we commonly schedule within 1–2 weeks; busy periods vary—confirm during enquiry.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Measured Building Surveys " />
      <ServiceParagraph text="At Oak surveys & Engineering Services, we specialize in delivering highly accurate Measured Building Surveys for residential, commercial, and industrial properties across Ireland." />
      <ServiceParagraph text="Whether you need detailed floor plans, elevation drawings, or full 3D models, our experienced engineers and surveyors use advanced tools to capture every dimension and structural detail with precision." />
      <ServiceParagraph text="From small renovation projects to complex building developments, we provide the reliable data you need to plan, design, and build with confidence." />

      <ServicesImg img={["/measured survey 1.svg", "/measured survey 2.svg"]} />

      <ServicesTitle text="What We Offer" />
      <ServiceParagraph
        text="Our measured building surveys can include:
"
      />
      <ServicesList
        type
        services={[
          "2D floor plans, elevations, and cross-sections",
          "3D scanning and digital modelling",
          "BIM and Revit-compatible data",
          "Detailed architectural visualizations",
          "Accurate point cloud data",
          "Comprehensive site and structure mapping",
        ]}
      />
      <ServiceParagraph text="With state-of-the-art equipment and millimetre-level accuracy, we ensure that every measurement is consistent and dependable, even in challenging or complex environments." />

      <ServicesTitle text="Why You Need a Measured Building Survey" />
      <ServiceParagraph text="A measured building survey is essential for renovation, extension, and design projects. It provides the foundational information that architects, engineers, and contractors rely on to plan accurately and avoid costly mistakes during construction." />
      <ServiceParagraph text="Our surveys help you:" />
      <ServicesList
        type
        services={[
          "Verify existing structural dimensions",
          "Support architectural and interior redesigns",
          "Document as-built conditions",
          "Streamline project planning and approval processes",
          "Ensure compliance with design standards and building codes",
        ]}
      />

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

export default MeasuredBuildingComp;
