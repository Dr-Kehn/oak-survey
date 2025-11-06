import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaPlay } from "react-icons/fa";

export default function ServiceCardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Measured Building Survey",
      description:
        "Our precise building surveys capture every structural detail for architects and engineers to design with confidence.",
    },
    {
      title: "Topographical Survey",
      description:
        "We deliver detailed site plans showing ground levels, boundaries, and features to help you plan and design efficiently.",
    },
    {
      title: "Boundary Mapping",
      description:
        "We provide reliable property boundary and title mapping for both legal and planning purposes.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0">
      <h1 className="font-bold text-[1.225rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-tight sm:leading-9 uppercase">
        SERVICE CARDS SECTION
      </h1>

      <p className="font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.25rem] leading-relaxed sm:leading-8 lg:leading-9 py-5 sm:py-6 lg:py-7">
        Our Top Expertise at a Glance
      </p>

      {/* Desktop: Show all cards */}
      <div className="hidden lg:flex justify-between items-stretch gap-6 xl:gap-8 mb-10">
        {cards.map((card, index) => (
          <aside
            key={index}
            className="rounded-[20px] justify-center flex flex-col min-h-[443px] px-6 gap-6 bg-light-gray hover:bg-form-gray transition-colors duration-300 cl-shadow flex-1"
          >
            <h2 className="font-bold text-[1.75rem] xl:text-[2rem] leading-tight">
              {card.title}
            </h2>
            <p className="font-medium text-[1rem] xl:text-[1.125rem] leading-relaxed">
              {card.description}
            </p>
            <button className="rounded border border-yellow-border text-yellow-border py-3 px-4 xl:py-[22px] xl:px-6 hover:text-light-gray hover:bg-brand-main hover:border-brand-main flex items-center justify-between h-12 transition-all duration-300 text-sm xl:text-base cursor-pointer">
              More About Us <FaPlay className="ml-2" />
            </button>
          </aside>
        ))}
      </div>

      {/* Mobile & Tablet: Carousel */}
      <div className="lg:hidden w-full relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {cards.map((card, index) => (
              <aside
                key={index}
                className="rounded-[20px] justify-center flex flex-col min-h-[400px] sm:min-h-[443px] px-6 sm:px-8 gap-4 sm:gap-6 bg-light-gray cl-shadow w-full shrink-0"
              >
                <h2 className="font-bold text-[1.5rem] sm:text-[1.75rem] leading-tight">
                  {card.title}
                </h2>
                <p className="font-medium text-[0.95rem] sm:text-[1rem] leading-relaxed">
                  {card.description}
                </p>
                <button className="rounded border border-yellow-border text-yellow-border py-3 px-4 sm:py-[22px] sm:px-6 hover:text-light-gray hover:bg-brand-main hover:border-brand-main flex items-center justify-between h-12 transition-all duration-300 text-sm sm:text-base cursor-pointer">
                  More About Us <FaPlay className="ml-2" />
                </button>
              </aside>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-brand-main w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-10 sm:gap-12 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous card"
            className="focus:outline-none focus:ring-2 focus:ring-brand-main rounded-full cursor-pointer"
          >
            <FaArrowCircleLeft className="w-7 h-7 sm:w-8 sm:h-8 text-brand-main hover:opacity-80 transition-opacity" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next card"
            className="focus:outline-none focus:ring-2 focus:ring-brand-main rounded-full cursor-pointer"
          >
            <FaArrowCircleRight className="w-7 h-7 sm:w-8 sm:h-8 text-brand-main hover:opacity-80 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
}
