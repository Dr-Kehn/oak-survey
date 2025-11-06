function CommercialDevelopmentSurveySection() {
  const mappedImages = [
    {
      img: "/ResidentialEstateMapping.svg",
      title: "RESIDENTIAL ESTATE MAPPING",
      desc: "Boundary and building surveys for a housing development in Kildare, ensuring smooth construction alignment.",
    },
    {
      img: "/infrastructureUpgradeWorks.svg",
      title: "Infrastructure Upgrade Works",
      desc: "Engineering surveys and setting-out for a major transport improvement project, providing precise data for all construction phases.",
    },
  ];

  return (
    <section className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 text-gray-text px-4 sm:px-0">
      <h1 className="font-bold text-base sm:text-[1.125rem] lg:text-[1.25rem] leading-[18px] sm:leading-7 lg:leading-9 uppercase">
        COMMERCIAL DEVELOPMENT SURVEY
      </h1>
      <p className="w-full lg:w-[65%] xl:w-[50%] font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] leading-[180%] sm:leading-8 lg:leading-9 mt-4 sm:mt-5 lg:mt-6">
        Detailed topographical and structural surveys for a new office complex
        in Dublin, supporting the design and planning team with reliable spatial
        data.
      </p>

      <div className="flex items-start justify-between gap-6 sm:gap-8 lg:gap-[39px] mt-8 sm:mt-10 lg:mt-12 flex-col lg:flex-row">
        {/* Main Image */}
        <aside className="w-full lg:w-1/2 xl:w-[55%]">
          <img
            src="/architectsAtWork.svg"
            alt="Architects at work on construction site"
            className="w-full h-auto rounded-lg object-cover"
          />
        </aside>

        {/* Side Content */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/2 xl:w-[45%] ">
          {mappedImages.map((item, index) => (
            <aside
              key={index}
              className="flex flex-col gap-3 sm:gap-4 lg:gap-6"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto rounded-lg object-cover"
              />
              <h2 className="font-bold text-base sm:text-[1.125rem] lg:text-[1.25rem] leading-[18px] sm:leading-7 lg:leading-9 uppercase">
                {item.title}
              </h2>
              <p className="font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] leading-[180%] sm:leading-8 lg:leading-9">
                {item.desc}
              </p>
            </aside>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommercialDevelopmentSurveySection;
