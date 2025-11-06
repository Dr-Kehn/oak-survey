import ServiceParagraph from "./ServiceParagraph";
import ServicesTitle from "./ServicesTitle";

function GetInTouch() {
  return (
    <>
      <ServicesTitle text="Get In Touch" />
      <div className="leading-relaxed sm:leading-8 lg:leading-normal font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] mt-5">
        <p>
          For professional, data-verified volume surveying services, contact Oak
          Surveys today.
        </p>
        <p>📞 Call: +353(0)874950977 </p>
        <p>📧 Email: info@oaksurveys.ie</p>
      </div>
      <ServiceParagraph text="Our team will provide a tailored quote and timeline that matches your project's needs." />
    </>
  );
}

export default GetInTouch;
