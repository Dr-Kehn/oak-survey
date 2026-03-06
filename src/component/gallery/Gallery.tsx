function Gallery() {
  const card = [
    {
      id: 1,
      title: "As-Built Wastewater Drainage Survey & Longitudinal Sections",
      description:
        "Asbuilt Survey of the wastewater drainage network which also included longitudinal sections of a recently completed residential development which was accepted / approved by Uisce Eireaan (Irish Water) for a return building contractor.",
      image: "/wastewater.png",
    },
    {
      id: 2,
      title: "As-Built Survey – Road Realignment & Public Infrastructure",
      description:
        "Asbuilt survey carried out by Oak Surveys of recently completed road realignment scheme which included the introduction of cyclelane, bus stops, and parking spaces for a shopping mall",
      image: "/roadrealignment.png",
    },
    {
      id: 3,
      title: "Topographical Survey of Residential Property",
      description:
        "Topograhical survey of a house carried out by Oak Surveys ahead of refurbishment by a return happy client.",
      image: "/residentialproperty.png",
    },
    {
      id: 4,
      title: "Longitudinal Survey of Bridge Structure",
      description:
        "Longitudinal section of a topographical survey of a bridge carried out by Oak Surveys to the highest standard",
      image: "/bridgestructure.png",
    },
    {
      id: 5,
      title: "Residential Surface Water Drainage Survey",
      description:
        "As built survey of the surface water drainage network on a newly completed residential development in the midlands. Asbuilt survey complies with county council and TIC standards.",
      image: "/water drainage.png",
    },
    {
      id: 6,
      title: "Topographical Survey of Derelict School Site",
      description:
        "Topographical Survey of a derelict school building ahead of demolition and re-construction",
      image: "/derelictschool.png",
    },
  ];

  const displayGallery = card.map((card) => (
    <div
      key={card.id}
      className="w-full galleryCardShadow rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6"
    >
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl leading-6 sm:leading-7 md:leading-8 tracking-normal text-gallery-black">
        {card.title}
      </h1>
      <p className="leading-6 sm:leading-7 mt-[3px] sm:mt-1 md:mt-[4.44px] text-sm sm:text-base text-gallery-gray">
        {card.description}
      </p>

      <img
        className="rounded-lg sm:rounded-xl mt-4 sm:mt-5 md:mt-6 w-full h-auto object-cover"
        src={card.image}
        alt={card.title}
      />
    </div>
  ));

  return (
    <section className="py-6 sm:py-10 md:py-16 lg:py-20 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] mx-auto px-3 sm:px-4 md:px-0">
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-8 sm:gap-y-12 md:gap-y-16 w-full">
        {displayGallery}
      </div>
    </section>
  );
}

export default Gallery;
