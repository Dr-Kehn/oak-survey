import { useState } from "react";
import GetInTouch from "../GetInTouch";
import OurServicesIntro from "../OurServicesIntro";
import ServiceParagraph from "../ServiceParagraph";
import ServicesList from "../ServicesList";
import ServicesTitle from "../ServicesTitle";
import { FaMinus, FaPlus } from "react-icons/fa";

function BoundaryDisputesComp() {
  const faq = [
    {
      question: "What equipment do you use to determine boundaries?",
      answer:
        "We use GNSS systems, total stations, and advanced mapping software to capture highly accurate boundary data and create precise reports.",
    },
    {
      question: "Can old beacons or damaged boundary markers affect my survey?",
      answer:
        "Yes, but we can re-establish accurate positions by comparing existing data with ground measurements and official maps from the Surveyor General’s office.",
    },
    {
      question: "Do you handle both private and commercial property disputes?",
      answer:
        "Yes. We assist homeowners, estates, developers, and corporate clients across Ireland with all types of boundary disputes.",
    },
    {
      question: "Can Oak surveys provide an official document for court use?",
      answer:
        "Yes. We prepare legally recognized boundary reports and survey plans that can be presented in court or to government agencies as part of your case..",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Professional Land Surveying and Mediation by Oak surveys" />
      <ServiceParagraph text="Boundary disputes can arise when two or more property owners disagree on where one parcel of land ends and another begins. These disagreements may involve ownership limits, wall placements, access routes, or maintenance responsibilities." />
      <ServiceParagraph text="At Oak surveys, we specialize in resolving such disputes through accurate surveying, professional documentation, and clear communication between all involved parties. Our goal is not only to determine the rightful boundary but also to preserve future neighborly relationships by finding fair and lasting solutions." />
      <ServiceParagraph text="We use advanced surveying technology, historical land data, and precise ground measurements to verify property limits and prepare legally valid reports for resolution, mediation, or court presentation." />

      <ServicesTitle text="Understanding Boundary Disputes" />
      <ServiceParagraph text="Boundary conflicts often occur because property documents and physical land features do not always align perfectly. While land titles and survey plans indicate ownership, their scales and accuracy may vary, leading to uncertainty on the ground." />
      <ServiceParagraph text="Typical causes include:" />
      <ServicesList
        type
        services={[
          "Overlapping or unclear land titles",
          "Missing or misplaced boundary markers",
          "Unverified or outdated survey plans",
          "Encroachments during construction",
          "Differences in land registry mapping",
        ]}
      />
      <ServiceParagraph text="By conducting a detailed ground truth survey, Oak surveyss identifies the actual boundary positions and provides you with a verified map that reflects true land ownership." />

      <ServicesTitle text="Our Approach to Boundary Resolution" />
      <ServiceParagraph text="When a boundary dispute arises, it is important to handle it calmly, factually, and professionally. Our team follows a clear process:" />
      <ServicesList
        services={[
          `Consultation and Document Review - We start by reviewing your title documents, survey plans, and any previous boundary information.`,
          `Ground Truth and Measurement Survey - Our certified surveyors visit the site to capture precise coordinates, locate existing beacons, and verify land limits with modern instruments.`,
          "Analysis and Report Preparation - We analyze all findings and prepare a professional report or drawing clearly indicating boundary lines and any overlaps.",
          "Mediation and Expert Witness Service - If required, Oak surveys can provide expert witness statements or mediation support to help both parties reach an agreeable solution.",
        ]}
      />
      <ServiceParagraph text="Through accuracy and neutrality, we ensure your dispute is resolved efficiently, without unnecessary tension or cost." />

      <ServicesTitle text="Why Choose Oak surveys" />
      <ServiceParagraph text="At Oak surveys, our clients trust us for integrity, professionalism, and precision. We approach every boundary issue with fairness and technical accuracy, using advanced tools like total stations, GNSS systems, and digital mapping software to achieve centimeter-level precision." />
      <ServiceParagraph text="We combine technical expertise with a human touch helping you maintain peace of mind while protecting your land rights. Whether for residential plots or large commercial estates, we tailor our service to suit your case’s complexity and urgency." />

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

export default BoundaryDisputesComp;
