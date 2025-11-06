import { useState } from "react";
import OurServicesIntro from "../OurServicesIntro";
import { FaMinus, FaPlus } from "react-icons/fa";
import ServicesTitle from "../ServicesTitle";
import ServiceParagraph from "../ServiceParagraph";
import ServicesList from "../ServicesList";

function TopographicalComp() {
  const faq = [
    {
      question: "What is a topographical survey?",
      answer:
        "A topographical survey maps all visible features on your land — including boundaries, slopes, elevations, and structures — to give a complete picture of your property.",
    },
    {
      question: "Why do I need one?",
      answer:
        "It’s essential for building design, planning approvals, property documentation, and resolving land disputes.",
    },
    {
      question: "How long does it take?",
      answer:
        "Most surveys are completed within a few days, depending on the size and location of the site.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Pricing depends on your site’s size and detail requirements. We’ll provide a quote after a short consultation.",
    },
    {
      question: "Who can request a survey?",
      answer:
        "We work with homeowners, developers, architects, real estate professionals, and construction firms nationwide.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0 mb-20">
      <OurServicesIntro title="Comprehensive Mapping for Every Stage of Development " />
      <ServiceParagraph text="At Oak surveys, we provide precise and detail-oriented topographical surveys, offering a complete picture of both natural and built environments. our team delivers highly accurate, contoured site drawings that serve as the foundation for successful design, planning, and construction projects." />
      <ServiceParagraph text="From vast open landscapes to complex architectural sites, our surveys help clients visualize every element of their land  ensuring that design and engineering decisions are made on reliable data." />

      <img
        className="mt-10 lg:mt-20"
        src={"/topographical survey.svg"}
        alt="Men laying Pipe"
      />

      <ServicesTitle text="Tailored Consultation Before Every Project" />
      <ServiceParagraph text="We begin each project with a one-on-one consultation to understand your specific objectives, site conditions, and timeline. This approach allows us to customise our survey process, ensuring we capture the most relevant data for your project. Whether you’re an architect, property developer, or private landowner, our goal is to deliver insights that move your plans forward efficiently and accurately." />
      <ServiceParagraph text="Our topographical surveys are invaluable for:" />
      <ServicesList
        type
        services={[
          "Planning permissions and pre-construction analysis",
          "Architectural and engineering design",
          "Boundary definition and dispute resolution",
          "Legal mapping and documentation",
          "Earthworks calculations and volume reporting",
        ]}
      />

      <ServicesTitle text="Advanced Technology, Reliable Accuracy" />
      <ServiceParagraph text="At Oak surveys, precision is our standard. We use cutting-edge surveying instruments  including robotic total stations and laser-based reflectorless systems to capture the most accurate elevation and position data possible. Every survey is completed under strict quality assurance protocols to ensure consistency and reliability." />
      <ServiceParagraph text="Our field data is carefully processed to produce clear, detailed digital maps and contour models that integrate seamlessly with your architectural or civil engineering workflows." />

      <ServicesTitle text="Expertise That Supports Every Sector" />
      <ServiceParagraph text="We proudly serve a wide range of clients, from architects and property developers to builders, planners, and private landowners. Our experience also extends to specialized projects such as golf courses and sports facilities, where the precision of gradients, elevation, and drainage can significantly influence performance and design outcomes." />
      <ServiceParagraph text="By partnering with Oak surveys, you gain access to a team that values clarity, communication, and technical excellence at every step of the process." />

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

export default TopographicalComp;
