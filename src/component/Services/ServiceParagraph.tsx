function ServiceParagraph({ text }: { text: string }) {
  return (
    <p className="leading-relaxed sm:leading-8 lg:leading-9 font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] mt-5">
      {text}
    </p>
  );
}

export default ServiceParagraph;
