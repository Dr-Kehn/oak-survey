function WhyOak() {
  const cards = [
    {
      icon: "/circleCheck.svg",
      title: "Accuracy",
      desc: "Employing the latest GPS, Total Station, and 3D scanning equipment for unparalleled data precision.",
    },
    {
      icon: "/fileIcon.svg",
      title: "Integrity",
      desc: "Maintaining transparency and professional ethics in all client interactions and project deliverables.",
    },
    {
      icon: "/heartIcon.svg",
      title: "Efficiency",
      desc: "Streamlining workflows to provide prompt service and reliable results that keep your project on schedule.",
    },
  ];

  return (
    <section className="min-h-[600px] sm:min-h-[800px] lg:min-h-[1195px] bg-light-gray flex flex-col justify-center items-center">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto py-10 sm:py-16 lg:py-20 px-4 sm:px-0">
        <h1 className="font-black text-[1.225rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-tight sm:leading-8 lg:leading-9 text-left">
          WHY CHOOSE <span className="text-brand-main">OAK SURVEYS?</span>
        </h1>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 mt-8 sm:mt-10 lg:mt-12 text-gray-text">
          {cards.map((card, index) => (
            <aside
              className="shadow-md rounded-[20px] w-[90%] mx-auto lg:basis-[30%] p-5 sm:p-6 lg:p-4 flex gap-3 sm:gap-4 lg:gap-2 items-start"
              key={index}
            >
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0"
              />
              <div>
                <h2 className="font-bold text-base sm:text-[1.5rem] lg:text-[2rem] leading-tight sm:leading-8 lg:leading-9">
                  {card.title}
                </h2>
                <p className="mt-2 sm:mt-2.5 lg:mt-3 font-medium leading-relaxed sm:leading-[25px] lg:leading-[27px] text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem]">
                  {card.desc}
                </p>
              </div>
            </aside>
          ))}
        </div>

        <div className="mt-10 hidden lg:block sm:mt-16 lg:mt-20 w-full sm:w-[95%] lg:w-[90%] mx-auto">
          {/* Images on big screen */}
          <img
            src="/double image.svg"
            alt="Architects planning"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="mt-10 block lg:hidden sm:mt-16 lg:mt-20 w-full sm:w-[95%] lg:w-[90%] mx-auto">
          {/* Images on small screen*/}
          <img
            src="/straight double image.svg"
            alt="Architects planning"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyOak;
