function Trusted() {
  const trustedClients = [
    {
      icon: "/shannon.svg",
      name: "Shannon",
    },
    {
      icon: "/bretland.svg",
      name: "Bretland",
    },
    {
      icon: "/abm.svg",
      name: "ABM",
    },
    {
      icon: "/cluna.svg",
      name: "Cluna",
    },
    {
      icon: "/Gem.svg",
      name: "Gem",
    },
    {
      icon: "/castlethorn.svg",
      name: "Castlethorn",
    },
  ];

  return (
    <>
      <section className="relative bg-[linear-gradient(rgba(31,31,31,0.8),rgba(31,31,31,0.8)),url('/handShake.jpg')] w-full bg-cover bg-no-repeat bg-center">
        <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto flex flex-col min-h-[200px] sm:min-h-[280px] lg:min-h-[367px] justify-center py-10 sm:py-0 px-4 sm:px-0">
          <h1 className="text-yellow-header font-bold text-[1.225rem] sm:text-[1.75rem] lg:text-[2.25rem] uppercase leading-tight sm:leading-8 lg:leading-9 lg:text-left text-center">
            <span className="pb-2 sm:pb-3 lg:pb-4 inline-block">
              TRUSTED CLIENTS
            </span>
          </h1>
        </div>
      </section>

      {/* Trusted Clients Icons */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-x-10 lg:gap-y-20">
            {trustedClients.map((client, index) => (
              <aside
                key={index}
                className="flex shadow-md hover:shadow-xl rounded-xl sm:rounded-2xl lg:rounded-[36.47px] p-6 sm:p-8 md:p-10 lg:p-12 hover:scale-105 transition-all duration-300 items-center justify-center bg-white min-h-[100px] sm:min-h-[130px] md:min-h-[150px] lg:min-h-[180px]"
              >
                <img
                  src={client.icon}
                  alt={`${client.name} logo`}
                  className="w-full h-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] lg:max-w-[180px] object-contain"
                />
              </aside>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Trusted;
