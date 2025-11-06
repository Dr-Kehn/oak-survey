const BuildingConfident = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] w-[90%] sm:w-[85%] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 justify-center py-10 sm:py-16 lg:py-20 text-gray-text px-4 sm:px-0">
        
        {/* Left Section */}
        <aside className="w-full lg:w-[30%]">
          <p className="border-l-4 border-brand-main pl-3 sm:pl-4 py-2 mb-4 sm:mb-5 text-[0.75rem] sm:text-sm lg:text-base font-medium">
            Our Services
          </p>
          <h2 className="text-[1.125rem] sm:text-[1.5rem] lg:text-[2.25rem] font-bold leading-tight sm:leading-8 lg:leading-9">
            Building Confidence Through Accuracy
          </h2>
        </aside>

        {/* Right Section */}
        <aside className="flex flex-col gap-5 sm:gap-6 lg:gap-8 text-[0.75rem] sm:text-sm lg:text-[1.25rem] font-medium leading-relaxed sm:leading-7 lg:leading-9 w-full lg:w-[44.5%]">
          <p>
            At OAK SURVEYS, we combine advanced technology with professional
            expertise to deliver accurate and dependable surveying solutions
            across Ireland. From land mapping and site engineering to
            construction support, we provide precise data that helps clients
            plan, design, and build with confidence.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4">
            <p>
              Our commitment to quality, efficiency, and integrity ensures every
              project meets the highest standards — on time and within budget.
            </p>
            <p>
              Explore our services below to discover how we can support your
              next project from the ground up.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BuildingConfident;