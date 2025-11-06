export default function ComprehensiveSolutionsSection() {
  const solutions = [
    {
      text: "Topographical Surveys — Accurate mapping of natural and built features for design and planning.",
    },
    {
      text: "Measured Building Surveys — Detailed internal and external measurements for extensions and refurbishments.",
    },
    {
      text: "Engineering & Setting-Out — Precision control for on-site positioning and construction layouts.",
    },
    {
      text: "Boundary & Legal Mapping — Certified property mapping in compliance with Irish Land Registry requirements.",
    },
    {
      text: "3D Laser Scanning & BIM — Advanced data capture for digital construction and asset modelling.",
    },
  ];

  return (
    <section className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-between text-gray-text py-10 sm:py-16 lg:py-20 gap-6 lg:gap-8 items-center px-4 sm:px-0">
      <aside className="w-full lg:basis-[50%]">
        <h1 className="font-bold text-[1.225rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-tight sm:leading-9 uppercase">
          COMPREHENSIVE SURVEYING SOLUTIONS
        </h1>
        <p className="font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.25rem] leading-relaxed sm:leading-8 lg:leading-9 py-5 sm:py-6 lg:py-7">
          From residential developments to large-scale infrastructure projects,
          Oak Surveys provides complete, end-to-end surveying services designed
          for clarity and confidence.
        </p>

        <ul className="flex flex-col gap-3 sm:gap-4 font-medium text-[0.75rem] sm:text-[0.95rem] lg:text-[1.125rem]">
          {solutions.map((solution, index) => (
            <li key={index} className="flex gap-2 sm:gap-3 items-start">
              <img
                src="/tick-circle.svg"
                alt="Check image"
                className="mt-1 w-4 h-4 sm:w-5 sm:h-5 shrink-0"
              />
              <span className="leading-relaxed">{solution.text}</span>
            </li>
          ))}
        </ul>
      </aside>

      <aside className="w-full lg:w-auto">
        <img
          src="/building plan image.svg"
          alt="Building plan image"
          className="w-full max-w-[500px] mx-auto mt-8 lg:mt-0"
        />
      </aside>
    </section>
  );
}
