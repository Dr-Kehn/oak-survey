function ServicesTitle({ text }: { text: string }) {
  return (
    <h3 className="font-bold text-[1.5rem] sm:text-[1.75rem] lg:text-[2.25rem] leading-tight sm:leading-9 border-l-4 border-brand-main pl-3 sm:pl-4 py-2 mt-10 lg:mt-20">
      {text}
    </h3>
  );
}

export default ServicesTitle;
