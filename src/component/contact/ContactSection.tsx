import { useState } from "react";
import { toast } from "sonner";

function ContactSection() {
  const contactInfo = [
    {
      icon: "/contact-call.svg",
      title: "Phone No",
      desc: "+353 (0)874950977",
      link: "tel:+353874950977",
    },
    {
      icon: "/contact-mail.svg",
      title: "Email Address",
      desc: "info@oaksurveys.ie",
      link: "mailto:info@oaksurveys.ie",
    },
  ];

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    surveyType: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in at least your name, email, and message");
      return;
    }

    // Construct email
    const email = "info@oaksurveys.ie";
    const subject = encodeURIComponent(
      `Survey Inquiry from ${formData.firstName} ${formData.lastName}`
    );
    const body = encodeURIComponent(
      `Phone: ${formData.phone}\nSurvey Type: ${formData.surveyType}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 w-[90%] sm:w-[85%] lg:w-[80%] mx-auto px-4 sm:px-0">
      {/* Contact icons - Always side by side, left aligned */}
      <div className="flex flex-row gap-6 sm:gap-10 lg:gap-20 justify-start">
        {contactInfo.map((info, index) => (
          <aside className="flex gap-3 sm:gap-4 items-start" key={index}>
            <img
              src={info.icon}
              alt={`${info.title} icon`}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0"
            />

            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
              <h2 className="font-bold text-sm sm:text-lg lg:text-[2rem] leading-tight sm:leading-8 lg:leading-9">
                {info.title}
              </h2>
              <a
                href={info.link}
                className="font-medium text-[0.625rem] sm:text-sm lg:text-[1.125rem] leading-relaxed sm:leading-6 lg:leading-[27px] hover:text-brand-main transition-colors break-all sm:break-normal"
              >
                {info.desc}
              </a>
            </div>
          </aside>
        ))}
      </div>

      {/* Contact form */}
      <form
        onSubmit={handleSubmit}
        className="mt-16 sm:mt-24 lg:mt-40 flex flex-col gap-6 sm:gap-7 lg:gap-8"
      >
        <div className="flex mx-auto w-full md:flex-row flex-col md:w-[85%] lg:w-[80%] gap-6 sm:gap-8 lg:gap-[39.32px]">
          <input
            className="basis-[50%] p-4 sm:p-5 lg:p-[19.66px] rounded-lg lg:rounded-[9.83px] bg-light-gray focus:outline-none focus:ring-2 focus:ring-brand-main shadow-lg placeholder:text-gray-400 text-sm sm:text-base"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            id="firstName"
            placeholder="First Name"
            aria-label="First Name"
          />
          <input
            className="basis-[50%] p-4 sm:p-5 lg:p-[19.66px] rounded-lg lg:rounded-[9.83px] bg-light-gray focus:outline-none focus:ring-2 focus:ring-brand-main shadow-lg placeholder:text-gray-400 text-sm sm:text-base"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            id="lastName"
            placeholder="Last Name"
            aria-label="Last Name"
          />
        </div>

        <div className="flex mx-auto w-full md:flex-row flex-col md:w-[85%] lg:w-[80%] gap-6 sm:gap-8 lg:gap-[39.32px]">
          <input
            className="basis-[50%] p-4 sm:p-5 lg:p-[19.66px] rounded-lg lg:rounded-[9.83px] bg-light-gray focus:outline-none focus:ring-2 focus:ring-brand-main shadow-lg placeholder:text-gray-400 text-sm sm:text-base"
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            id="email"
            placeholder="Email Address"
            aria-label="Email Address"
          />
          <input
            className="basis-[50%] p-4 sm:p-5 lg:p-[19.66px] rounded-lg lg:rounded-[9.83px] bg-light-gray focus:outline-none focus:ring-2 focus:ring-brand-main shadow-lg placeholder:text-gray-400 text-sm sm:text-base"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            id="phone"
            placeholder="Phone Number"
            aria-label="Phone Number"
          />
        </div>

        <div className="md:w-[85%] lg:w-[80%] w-full mx-auto">
          <input
            className="w-full p-4 sm:p-5 lg:p-[19.66px] rounded-lg lg:rounded-[9.83px] bg-light-gray focus:outline-none focus:ring-2 focus:ring-brand-main shadow-lg placeholder:text-gray-400 text-sm sm:text-base"
            type="text"
            name="surveyType"
            value={formData.surveyType}
            onChange={handleChange}
            placeholder="Type of survey required"
            id="surveyType"
            aria-label="Type of survey required"
          />
        </div>

        <div className="w-full md:w-[85%] lg:w-[80%] mx-auto">
          <textarea
            className="min-h-[150px] sm:min-h-[175px] lg:min-h-[175.72px] resize-y w-full p-4 sm:p-5 lg:p-[19.66px] focus:outline-none focus:ring-2 focus:ring-brand-main bg-light-gray rounded-lg lg:rounded-[9.83px] shadow-lg placeholder:text-gray-400 text-sm sm:text-base"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            id="message"
            aria-label="Message"
          />
        </div>

        <div className="w-full md:w-[85%] lg:w-[80%] mx-auto">
          <button
            type="submit"
            className="bg-brand-main rounded-lg py-3 sm:py-4 px-6 sm:px-8 font-medium text-white w-full sm:w-auto hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-brand-main focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactSection;
