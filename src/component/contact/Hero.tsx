function ContactHero() {
  return (
    <section className="relative bg-[linear-gradient(rgba(31,31,31,0.8),rgba(31,31,31,0.8)),url('/contactUsImage.png')] w-full  bg-cover bg-no-repeat bg-center">
      <div className="w-[80%] mx-auto flex flex-col min-h-[367px] justify-center">
        <h1 className="text-yellow-header font-bold text-[1.25rem] sm:text-[1.75rem] lg:text-[2.25rem] uppercase leading-tight sm:leading-9 lg:text-left text-center">
          <span className=" pb-2 sm:pb-4 inline-block">CONTACT US</span>
        </h1>
      </div>
    </section>
  );
}

export default ContactHero;
