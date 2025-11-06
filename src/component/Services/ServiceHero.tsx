interface ServiceHeroProps {
  title: string;
  backgroundImage?: string;
  placeDiv?: boolean;
}

const ServiceHero = ({
  title,
  backgroundImage = "/Servicebg.jpg",
  placeDiv = false,
}: ServiceHeroProps) => {
  return (
    <div
      className="relative w-full lg:h-[80vh] bg-cover bg-no-repeat bg-center flex  items-center  h-[30vh] md:h-[50vh]"
      style={{
        backgroundImage: `linear-gradient(rgba(31,31,31,0.8), rgba(31,31,31,0.8)), url(${backgroundImage})`,
      }}
    >
      <div className="max-w-[1440px] w-[80%] m-auto text-center md:text-start">
        <p className="lg:text-[50px] font-bold  text-[#F9BF06] text-[20px]">
          {title}
        </p>
      </div>

      {placeDiv && (
        <div className=" absolute lg:w-[80%] w-[90%] lg:left-[10%] left-[5%] -bottom-px py-4 md:py-6 bg-white "></div>
      )}
    </div>
  );
};

export default ServiceHero;
