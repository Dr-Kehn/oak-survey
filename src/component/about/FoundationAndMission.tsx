function FoundationAndMission() {
  const foundationMissions = [
    {
      desc: "OAK SURVEYS is a trusted provider of high-precision Land Surveying and Civil Engineering services throughout Ireland. We are driven by a commitment to accuracy, efficiency, and excellence, ensuring that every project we undertake is built on a foundation of reliable data and technical precision.",
    },
    {
      desc: "We understand that precise measurements and sound engineering principles form the backbone of every successful construction, development, and infrastructure project. Whether it's a residential site, commercial development, or large-scale infrastructure scheme, we provide our clients with data that informs smarter decisions, reduces risk, and enhances project outcomes.",
    },
    {
      desc: "Our mission is to integrate cutting-edge geospatial technology — including advanced 3D scanning, GPS, and drone mapping — with decades of professional expertise to deliver cost-effective, dependable, and timely solutions. At OAK SURVEYS, we work closely with developers, architects, engineers, and contractors to turn complex terrain and structural challenges into clear, actionable insights that drive progress and precision at every stage of development.",
    },
  ];

  const images = [
    {
      img: "/precision.svg",
      title: "PRECISION IN EVERY MEASUREMENT",
      desc: "We Ensure Absolute Accuracy In Every Reading, Providing Reliable Data For Smarter Decisions.",
    },
    {
      img: "/surveying.svg",
      title: "UTILIZING STATE-OF-THE-ART SURVEYING TECHNOLOGY ON SITE",
      desc: "Using Advanced GPS, 3D Scanning, And Drone Tools, We Capture Precise On-site Data With Speed And Efficiency.",
    },
  ];

  return (
    <section className="text-gray-text w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0">
      <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* Left Section - Mission Text */}
        <aside className="flex flex-col gap-5 sm:gap-6 lg:gap-8 w-full lg:w-[55%]">
          <h1 className="uppercase font-bold leading-tight sm:leading-9 text-[1.225rem] sm:text-[1.75rem] lg:text-[2.25rem]">
            Our Foundation and Mission
          </h1>

          {foundationMissions.map((mission, index) => (
            <p
              className="font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.25rem] leading-relaxed sm:leading-8 lg:leading-9"
              key={index}
            >
              {mission.desc}
            </p>
          ))}
        </aside>

        {/* Right Section - Images and Features */}
        <aside className="flex flex-col gap-8 sm:gap-10 lg:gap-[63px] w-full lg:w-[42%]">
          {images.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto rounded-lg object-cover"
              />
              <h2 className="font-bold leading-tight sm:leading-8 lg:leading-9 text-base sm:text-[1.125rem] lg:text-[1.25rem] uppercase">
                {item.title}
              </h2>
              <p className="leading-relaxed sm:leading-8 lg:leading-9 font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem]">
                {item.desc}
              </p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

export default FoundationAndMission;
