function OurServicesIntro({ title }: { title: string }) {
  return (
    <>
      <p className="border-l-4 border-brand-main pl-3 sm:pl-4 py-2 mb-4 sm:mb-5 text-[0.75rem] sm:text-sm lg:text-base leading-9 text-black-text">
        Our Services
      </p>
      <h3 className="font-bold text-[1.5rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-tight sm:leading-9 pb-3.5">
        {title}
      </h3>
    </>
  );
}

export default OurServicesIntro;
