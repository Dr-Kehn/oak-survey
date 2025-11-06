import { useState } from "react";
import GetInTouch from "../GetInTouch";
import OurServicesIntro from "../OurServicesIntro";
import ServiceParagraph from "../ServiceParagraph";
import ServicesImg from "../ServicesImg";
import ServicesList from "../ServicesList";
import ServicesTitle from "../ServicesTitle";
import { FaMinus, FaPlus } from "react-icons/fa";

function SettingOutComp() {
  const faq = [
    {
      question: 'What exactly does "setting out" mean?',
      answer:
        "Setting out is the process of marking the exact positions of a building or structure on the ground based on its design drawings. It guides builders during construction, ensuring the design is built precisely as intended.",
    },
    {
      question: "Do you handle both small and large projects?",
      answer:
        "Yes. We work on projects of all scales — from single residential homes to large commercial complexes, industrial facilities, and public infrastructure.",
    },
    {
      question: "Can Oak surveys assist with post-setting out verification?",
      answer:
        "Absolutely. We provide as-built surveys to verify that construction aligns with the approved setting out points and design specifications.",
    },
    {
      question: "What equipment do you use for setting out?",
      answer:
        "We use high-precision GPS, total stations, and digital surveying instruments to achieve accurate and reliable results. These tools allow us to transfer complex designs onto the ground efficiently.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Precision Setting Out Services in Ireland" />
      <ServiceParagraph text="At Oak surveys, we understand that every successful construction project begins with precision. Setting out is the process of transferring a building or infrastructure design from technical drawings onto the actual ground — marking out exact positions, levels, and dimensions where structures will be built." />
      <ServiceParagraph text="Accurate setting out ensures that your foundation, walls, columns, and other structural elements are built in the right place, at the right level, and according to plan. Any inaccuracy at this stage can lead to costly delays, errors, and structural problems later on — which is why precision is at the heart of what we do." />
      <ServicesImg img={["/site Survey 1.svg", "/site survey 2.svg"]} />
      <ServicesTitle text="Our Expertise" />
      <ServiceParagraph text="Oak surveys provides professional setting out services across Ireland for a wide range of construction and engineering projects. From small residential developments to large-scale industrial, commercial, and public infrastructure works, our team ensures that every design is translated flawlessly onto the ground." />
      <ServiceParagraph text="We also offer specialized setting out services for complex projects such as: " />
      <ServicesList
        type
        services={[
          "Sports facilities and stadiums",
          "Road and bridge construction",
          "Industrial plants and warehouses",
          "Estates and mixed-use developments",
        ]}
      />
      <ServiceParagraph text="Our experienced surveyors combine technical accuracy with deep construction knowledge, ensuring your project starts right from day one." />
      <ServicesTitle text="Our Setting Out Process" />
      <ServiceParagraph text="At Oak surveys, we use advanced surveying equipment and digital workflows to guarantee high accuracy and efficiency in our setting out process." />
      <ServiceParagraph text="Our approach typically involves:" />
      <ServicesList
        services={[
          "Site Control Establishment – We set up accurate control points and benchmarks on the site, forming a reliable reference framework for all construction activities.",
          "Data Extraction from Design Drawings – Using architectural and structural plans, we extract all relevant data to determine exact coordinates and levels.",
          "On-Site Marking – Our surveyors then mark out building corners, foundations, grid lines, and other key points directly on the ground.",
          "Verification and Adjustment – Before construction begins, we verify all positions to ensure consistency with design drawings and engineering specifications.",
        ]}
      />
      <ServiceParagraph text="We use high-precision GPS, total stations, and reflectorless robotic instruments to ensure millimetre-level accuracy on all measurements. Our communication with engineers, architects, and site managers is seamless throughout the entire process — keeping your project on schedule and error-free." />
      <ServicesTitle text="Why Setting Out Matters" />
      <ServiceParagraph text="Setting out is the backbone of any construction project. It determines how accurately the physical structure aligns with its design. Poorly executed setting out can cause alignment issues, uneven foundations, and even legal disputes over boundary positioning." />
      <ServiceParagraph text="By working with Oak surveys, you ensure:" />
      <ServicesList
        type
        services={[
          "Accurate foundation positioning",
          "Smooth project execution",
          "Elimination of costly rework",
          "Compliance with design and regulatory standards",
        ]}
      />
      <ServicesTitle text="Why Choose Oak surveys" />
      <ServiceParagraph text="At Oak surveys, we take pride in delivering precision-driven results and exceptional customer service. Our engineers and surveyors are trained in both traditional and modern techniques, allowing us to adapt to projects of all sizes and complexities." />
      <ServiceParagraph text="We prioritize: " />
      <ServicesList
        type
        services={[
          "Attention to detail in every phase of the project",
          "Open and transparent communication",
          "Timely completion of tasks",
          "Compliance with Ireland construction and survey standards",
          "Whether it's a housing development, industrial facility, or commercial structure — Oak surveys ensures your project begins on the right footing.",
        ]}
      />

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

export default SettingOutComp;
