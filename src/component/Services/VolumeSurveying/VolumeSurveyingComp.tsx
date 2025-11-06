import { useState } from "react";
import GetInTouch from "../GetInTouch";
import OurServicesIntro from "../OurServicesIntro";
import ServiceParagraph from "../ServiceParagraph";
import ServicesImg from "../ServicesImg";
import ServicesList from "../ServicesList";
import ServicesTitle from "../ServicesTitle";
import { FaMinus, FaPlus } from "react-icons/fa";

function VolumeSurveyingComp() {
  const faq = [
    {
      question: "What is the purpose of a volume survey?",
      answer:
        "A volume survey determines the exact amount of material excavated, filled, or stockpiled on a site. It ensures precise quantity tracking for construction, mining, and earthwork management.",
    },
    {
      question: "What technology do you use for volume surveys?",
      answer:
        "We combine 3D laser scanning, GNSS, and drone-based photogrammetry to capture accurate topographical data and create digital terrain models.",
    },
    {
      question: "How accurate are the results?",
      answer:
        "Our volumetric surveys provide centimetre-level accuracy depending on site conditions and chosen methodology.",
    },
    {
      question: "Why is a professional volume survey important?",
      answer:
        "It removes uncertainty from material estimation, supports accurate billing, helps prevent disputes, and ensures compliance with engineering standards.",
    },
    {
      question: "Can you work in remote or challenging terrains?",
      answer:
        "Absolutely. Our team is fully equipped to operate across Ireland, including rough, sloped, or hard-to-access sites.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Precision Measurement and Earthwork Analysis by Oak surveys " />
      <ServiceParagraph text="At Oak surveys, we deliver precise and dependable volume surveying services for projects of every scale. From construction sites and stockpiles to large quarries and infrastructure developments, our experts use advanced surveying technology to measure, calculate, and report earthwork quantities with complete accuracy." />
      <ServiceParagraph text="Our volumetric surveys provide essential data for project planning, cost estimation, and resource management. Using advanced laser scanning and drone-based photogrammetry, we generate 3D models that show every contour and variation on site — helping clients visualize, plan, and make informed decisions based on verified ground data." />
      <ServiceParagraph text="Whether you are managing a complex excavation, verifying quantities for payment, or assessing stockpile volumes, Oak surveys ensures you receive reliable, data-backed results that align with industry standards." />

      <ServicesImg img={["/caterpillar.svg", "/survey caterpillar.svg"]} />

      <ServicesTitle text="What Is Volume Surveying Used For" />
      <ServiceParagraph text="Volume surveying is used to determine the precise quantity of material within a specific area or space. It helps quantify excavation, filling, and stockpile activities during construction, mining, and land development." />
      <ServiceParagraph text="Our survey data can identify:" />
      <ServicesList
        type
        services={[
          "The volume of material excavated from a site",
          "The amount of fill required to achieve design levels",
          "Remaining material available within stockpiles",
          "Accurate records for contractor payments or progress reports",
        ]}
      />
      <ServiceParagraph text="We use digital modelling and 3D point clouds to create clear, visual representations of the surveyed area, ensuring transparency and confidence in every calculation." />

      <ServicesTitle text="Why Choose Oak surveys" />
      <ServiceParagraph text="With years of experience in land and engineering surveys, Oak Surveys  has become a trusted name in precise volumetric measurement. Our process combines expertise, innovation, and accuracy to eliminate guesswork from your project." />
      <ServiceParagraph text="Our volume surveys are:" />
      <ServicesList
        type
        services={[
          "Fast and accurate: Using the latest laser and drone technologies",
          "Cost-effective: Reducing manual measurement errors and rework",
          "Detailed and visual: Delivering 3D models for clear understanding",
          "Non-intrusive: Capturing data safely and efficiently from any terrain",
        ]}
      />
      <ServiceParagraph text="Every project is handled by qualified surveyors who understand the realities of  construction and environmental conditions. We adapt our methods to suit your project’s location, size, and objectives while maintaining the highest professional standards." />

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

export default VolumeSurveyingComp;
