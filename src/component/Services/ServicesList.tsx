interface Props {
  services: string[];
  type?: boolean;
}

function ServicesList({ services, type = false }: Props) {
  return (
    <ul>
      {services.map((service, index) => (
        <li
          className={
            type
              ? "list-disc pl-4  mt-2 leading-relaxed sm:leading-8 lg:leading-9 font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] list-inside "
              : "list-decimal pl-4  mt-2 leading-relaxed sm:leading-8 lg:leading-9 font-medium text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] list-inside "
          }
          key={index}
        >
          {service}
        </li>
      ))}
    </ul>
  );
}

export default ServicesList;
