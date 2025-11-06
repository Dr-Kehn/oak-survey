import { useState } from "react";
import { FaStar, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function ClientSay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      avatar: "/client avatar.svg",
      title: "Reliable & Professional",
      review:
        "Oak Surveys delivered an exceptional topographical survey for our commercial project. Their team was responsive, professional, and easy to work with.",
      rating: 5,
    },
    {
      avatar: "/client avatar.svg",
      title: "Excellent Communication",
      review:
        "They went above and beyond to ensure accuracy in every drawing. We'll definitely be working with Oak Surveys again.",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="mt-10 w-full min-h-[593px] bg-white-25 flex items-center justify-center py-10 sm:py-16 lg:py-20">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        {/* Left Section - Text */}
        <aside className="text-gray-text w-full lg:basis-[45%] text-center lg:text-left">
          <h1 className="font-bold text-[1.5rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-tight sm:leading-9 uppercase">
            WHAT OUR CLIENTS SAY
          </h1>
          <p className="font-medium leading-relaxed sm:leading-9 text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] mt-4 lg:mt-2">
            Trusted feedback from our valued clients
          </p>
          <button className="bg-brand-main rounded py-3 sm:py-4 lg:py-[22px] px-4 sm:px-5 lg:px-6 font-medium text-white-variant w-full sm:w-[180px] lg:w-[201px] h-auto sm:h-12 flex items-center mt-6 sm:mt-5 lg:mt-6 justify-center text-sm sm:text-base hover:bg-opacity-90 transition-all mx-auto lg:mx-0 cursor-pointer">
            More About Us
          </button>
        </aside>

        {/* Right Section - Testimonials */}
        {/* Desktop: Show both cards */}
        <div className="hidden lg:flex lg:basis-[55%] xl:basis-[60%] items-stretch gap-6 xl:gap-[33px]">
          {testimonials.map((testimonial, index) => (
            <aside
              key={index}
              className="cl-shadow rounded-[20px] min-h-[361px] flex flex-col gap-2.5 items-center justify-center bg-light-gray p-6 flex-1"
            >
              <img
                src={testimonial.avatar}
                alt="client avatar"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <div className="flex text-yellow-header gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
                ))}
              </div>
              <h3 className="font-bold text-[1rem] sm:text-[1.125rem] leading-7 sm:leading-9 text-center">
                {testimonial.title}
              </h3>
              <p className="text-center font-medium text-[0.875rem] sm:text-[1rem] leading-relaxed sm:leading-[27px]">
                {testimonial.review}
              </p>
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
              {testimonials.map((testimonial, index) => (
                <aside
                  key={index}
                  className="cl-shadow rounded-[20px] min-h-[380px] sm:min-h-[361px] flex flex-col gap-3 sm:gap-2.5 items-center justify-center bg-light-gray p-6 sm:p-8 w-full shrink-0"
                >
                  <img
                    src={testimonial.avatar}
                    alt="client avatar"
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                  <div className="flex text-yellow-header gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  <h3 className="font-bold text-[1rem] sm:text-[1.125rem] leading-7 sm:leading-9 text-center">
                    {testimonial.title}
                  </h3>
                  <p className="text-center font-medium text-[0.875rem] sm:text-[1rem] leading-relaxed sm:leading-[27px]">
                    {testimonial.review}
                  </p>
                </aside>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-brand-main w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-10 sm:gap-12 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="focus:outline-none focus:ring-2 focus:ring-brand-main rounded-full"
            >
              <FaArrowCircleLeft className="w-7 h-7 sm:w-8 sm:h-8 text-brand-main hover:opacity-80 transition-opacity" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="focus:outline-none focus:ring-2 focus:ring-brand-main rounded-full"
            >
              <FaArrowCircleRight className="w-7 h-7 sm:w-8 sm:h-8 text-brand-main hover:opacity-80 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
