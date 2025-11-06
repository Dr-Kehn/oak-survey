import { useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Land Registry Complaint Map",
    description:
      "Official, registry-compliant maps that clearly define boundaries for legal registration.",
    icon: "./Landing.svg",
    link: "/services/land-registry",
  },
  {
    id: 2,
    title: "Topographical Surveying",
    description:
      "Accurate land mapping that captures elevations and features for efficient site planning.",
    icon: "./Topographical.svg",
    link: "/services/topographical-surveying",
  },
  {
    id: 3,
    title: "Measured Building Survey",
    description:
      "Detailed 2D and 3D building data for renovations, extensions, or architectural documentation.",
    icon: "./Building.svg",
    link: "/services/building-survey",
  },
  {
    id: 4,
    title: "3D Scanning",
    description:
      "High-precision 3D scans and digital models that support accurate planning, design, and documentation.",
    icon: "./3D.svg",
    link: "/services/3d-scanning",
  },
  {
    id: 5,
    title: "Volume Surveying",
    description:
      "Precise volume measurements for earthworks, excavations, and stockpile management.",
    icon: "./Topographical.svg",
    link: "/services/volume-surveying",
  },
  {
    id: 6,
    title: "Boundary Disputes",
    description:
      "Professional surveys to establish clear boundaries and resolve land ownership conflicts.",
    icon: "./Boundary.svg",
    link: "/services/boundary-disputes",
  },
  {
    id: 7,
    title: "Forestry Services",
    description:
      "Safe, cost-effective forest road design from initial survey to final documentation.",
    icon: "./Forestry.svg",
    link: "/services/forestry-services",
  },
  {
    id: 8,
    title: "Setting Out",
    description:
      "Accurate on-site markings that translate your design into reality during construction.",
    icon: "./Setting.svg",
    link: "/services/setting-out",
  },
  {
    id: 9,
    title: "Drone Mapping",
    description:
      "We use drones to capture precise aerial data for fast, accurate mapping and analysis.",
    icon: "./Drone.svg",
    link: "/services/drone-mapping",
  },
  {
    id: 10,
    title: "Irish Water Compliance Documentation",
    description:
      "We handle all documentation to ensure your project meets Irish Water's technical standards and approval requirements.",
    icon: "./Water.svg",
    link: "/services/irish-water",
  },
  {
    id: 11,
    title: "As Built Surveys",
    description:
      "We record the exact details of completed works, providing accurate data that reflects what was built on site.",
    icon: "./Setting.svg",
    link: "/services/as-built-surveys",
  },
  {
    id: 12,
    title: "Site Surveys",
    description:
      "We capture precise ground and boundary data to support planning, design, and construction activities.",
    icon: "./Topographical.svg",
    link: "/services/site-surveys",
  },
];

const ServiceCard = () => {
  const searchRef = useRef<null | HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  // Focus on search when icon is clicked
  const searchFocus = () => {
    searchRef?.current?.focus();
  };

  // Filter services - case insensitive partial match
  const filteredService = services.filter((service) =>
    service.title.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  return (
    <>
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] py-6 sm:py-8 mx-auto flex justify-end px-4 sm:px-0">
        <div className="bg-anotherGray w-full sm:w-[280px] lg:w-[300px] flex gap-3 sm:gap-4 rounded-lg p-3 sm:p-4 items-center">
          {/* Search icon */}
          <img
            onClick={searchFocus}
            src="/search icon.svg"
            alt="Search icon"
            className="w-5 h-5 cursor-pointer shrink-0"
          />
          {/* Searchbar */}
          <input
            ref={searchRef}
            placeholder="Search services..."
            type="text"
            value={searchValue}
            className="w-full border-none outline-none bg-transparent text-sm sm:text-base placeholder:text-gray-400"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && (
            <button
              onClick={() => setSearchValue("")}
              className="text-gray-500 hover:text-gray-700 text-xl shrink-0"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <section className="w-full py-6 sm:py-8 flex justify-center items-center mb-10 sm:mb-14">
        {/* Cards */}
        <div className="max-w-[1440px] w-[90%] sm:w-[85%] lg:w-[80%] px-4 sm:px-0">
          {filteredService.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {filteredService.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col items-center justify-between bg-light-gray shadow-md hover:shadow-xl rounded-2xl px-6 sm:px-7 lg:px-8 text-center py-10 sm:py-12 lg:py-14 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 object-contain"
                  />
                  <h3 className="text-base sm:text-lg lg:text-[2rem] font-bold mb-4 sm:mb-5 lg:mb-7 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[0.75rem] sm:text-sm lg:text-[1.125rem] text-gray-text font-medium mb-5 sm:mb-7 lg:mb-10 w-[90%] sm:w-[85%] lg:w-[80%] leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="bg-brand-main text-white w-full sm:w-[50%] lg:w-[45%] py-2.5 sm:py-3 rounded-md text-[0.75rem] sm:text-sm lg:text-base font-medium hover:bg-opacity-90 transition-all hover:scale-105 hover:shadow-lg"
                  >
                    More
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <p className="text-gray-text text-base sm:text-lg lg:text-xl font-medium">
                No services found matching "{searchValue}"
              </p>
              <button
                onClick={() => setSearchValue("")}
                className="mt-4 text-brand-main hover:underline font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
