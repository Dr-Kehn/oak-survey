export default function AccurateDataSection() {
  const features = [
    "Professional land and structural surveys",
    "Measured building and as-built documentation",
    "Boundary mapping and topographical surveys",
    "Construction setting-out and verification",
  ];

  return (
    <section className="w-full mx-auto flex flex-col-reverse lg:flex-row justify-center text-gray-text py-10 sm:py-16 lg:py-20 items-center bg-form-gray lg:bg-transparent">
      <aside className="w-full lg:w-auto px-4 sm:px-0">
        <img
          src="/Data.svg"
          alt="Data image"
          className="w-full max-w-[500px] mx-auto mt-8 lg:mt-0"
        />
      </aside>

      <aside className="w-full lg:basis-[60%]">
        <h1 className="font-bold text-[1.225rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-tight sm:leading-9 px-6 sm:px-8 lg:px-10 uppercase">
          Building Ireland's Future with Accurate Data
        </h1>
        <p className="font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.25rem] leading-relaxed sm:leading-8 lg:leading-9 py-5 sm:py-6 lg:py-7 px-6 sm:px-8 lg:px-10">
          Oak Surveys provides reliable surveying solutions for engineers,
          architects, developers, and contractors across Ireland, combining
          local expertise with advanced technology for smarter design and
          construction.
        </p>

        <ul className="flex flex-col gap-3 sm:gap-4 font-medium text-[0.75rem] sm:text-[0.95rem] lg:text-[1.125rem] px-6 sm:px-8 lg:px-10">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2 sm:gap-3 items-start">
              <img
                src="/tick-circle.svg"
                alt="Check image"
                className="mt-1 w-4 h-4 sm:w-5 sm:h-5 shrink-0"
              />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}

          <button className="bg-brand-main rounded py-3 sm:py-4 lg:py-[22px] px-4 sm:px-5 lg:px-6 font-medium text-white-variant w-full sm:w-[180px] lg:w-[201px] h-auto sm:h-12 flex items-center mt-4 sm:mt-5 lg:mt-6 justify-center text-sm sm:text-base hover:bg-opacity-90 transition-all cursor-pointer">
            More About Us
          </button>
        </ul>
      </aside>
    </section>
  );
}
