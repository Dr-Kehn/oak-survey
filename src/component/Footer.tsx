import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" min-h-[730px] mx-auto bg-brand-950 flex items-center">
      <section className="mx-auto lg:w-[80%] w-[80%] md:w-full md:px-10 lg:px-0 flex md:flex-row flex-col justify-between font-medium py-14 md:py-0">
        <aside className="lg:w-[400px] md:w-[350px] w-full">
          {/* Form */}
          <h1 className="flex items-center gap-2 font-bold text-[1.51rem] mb-2.5 text-white-25">
            <img src="/oak_logo.svg" alt="Oak Logo" /> Oak Surveys
          </h1>
          <p className="text-[0.75rem]/27.67px md:text-[1.125rem]/27.67px font-normal  text-white-gray">
            We deliver trusted surveying services across Ireland — combining
            precision, professionalism, and personal service for every client.
          </p>

          <div className="flex flex-col gap-4 relative">
            <input
              className="border border-brand-950 text-form-gray p-4 rounded-lg mt-4 focus:outline focus:outline-brand-main placeholder:text-form-gray/50 bg-bg-form-gray"
              type="text"
              name=""
              id=""
              placeholder="Full Name"
            />

            <input
              className="border border-brand-950 text-form-gray p-4 rounded-lg mt-4 focus:outline focus:outline-brand-main placeholder:text-form-gray/50 bg-bg-form-gray"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />

            <input
              className="border border-brand-950 text-form-gray p-4 rounded-lg mt-4 focus:outline focus:outline-brand-main placeholder:text-form-gray/50 bg-bg-form-gray"
              type="number"
              name=""
              id=""
              placeholder="Phone number"
            />

            <textarea
              className="border border-brand-950 text-form-gray p-4 rounded-lg mt-4 focus:outline focus:outline-brand-main placeholder:text-form-gray/50 bg-bg-form-gray resize-y h-[113px]"
              placeholder="Message"
            ></textarea>

            <button className="rounded-lg bg-brand-main w-[151px] h-12 text-white font-medium absolute md:right-0 left-0 -bottom-20 cursor-pointer">
              Send
            </button>
          </div>
        </aside>

        <div className="flex justify-between md:w-[50%] w-full mt-32 md:mt-0">
          <aside>
            {/* Links */}
            <h1 className="font-bold text-[1.11125rem] text-white-25 mt-12">
              LINKS
              <ul className="flex flex-col gap-4 mt-8">
                <li>
                  <Link
                    to="about"
                    className="md:text-[1.125rem]/27.67px text-[0.75rem]/27.67px font-normal  text-white-gray"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:text-[1.125rem]/27.67px text-[0.75rem]/27.67px font-normal  text-white-gray"
                    to="trustedPartners"
                  >
                    Trusted Clients
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:text-[1.125rem]/27.67px text-[0.75rem]/27.67px font-normal  text-white-gray"
                    to="services"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:text-[1.125rem]/27.67px text-[0.75rem]/27.67px font-normal  text-white-gray"
                    to="contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </h1>
          </aside>

          <aside>
            {/* Contact section */}
            <h1 className="font-bold text-[1.11125rem] mb-2.5 text-white-25 mt-12 ">
              CONTACT
              <ul className="flex flex-col gap-4 mt-8 text-white-gray">
                <li className="flex items-center gap-4 md:text-[1.125rem]/27.67px text-[0.75rem]/27.67px ">
                  <img src="/second-call-icon.svg" alt="call icon" /> +353
                  (0)874950977
                </li>

                <li className="flex items-center gap-4 md:text-[1.125rem]/27.67px text-[0.75rem]/27.67px ">
                  <img src="/mail.svg" alt="mail icon" /> info@oaksurveys.ie
                </li>
              </ul>
            </h1>
          </aside>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
