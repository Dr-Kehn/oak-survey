export default function HeroSection() {
  return (
    <section className="relative bg-[linear-gradient(rgba(31,31,31,0.8),rgba(31,31,31,0.8)),url('/heroImgAbout.jpg')] w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[559px] bg-cover bg-no-repeat bg-center">
      <div className="min-h-[188px] pt-[210px] sm:pt-[260px] lg:pt-[302px] w-[90%] sm:w-[85%] lg:w-[75%] mx-auto pb-7 px-4 sm:px-0">
        <h1 className="text-yellow-header font-bold text-[1.25rem] sm:text-[1.75rem] lg:text-[2.25rem] uppercase leading-tight sm:leading-9 lg:text-left text-center">
          <span className="border-b border-b-white w-[300px] lg:w-[600px] pb-2 sm:pb-4 inline-block">
            ABOUT US
          </span>
        </h1>

        <p className="leading-relaxed sm:leading-8 lg:leading-9 font-bold text-[0.75rem] sm:text-[0.95rem] lg:text-[1.125rem] w-full lg:text-left text-center mt-4 lg:w-[60%] text-white-accent">
          OAK SURVEYS Delivers Precise, Technology-Driven Surveying and
          Engineering Solutions Trusted By Clients Across Ireland.
        </p>
      </div>
    </section>
  );
}
