function ServicesImg({ img }: { img: string[] }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap lg:gap-[88px] mt-10 lg:mt-20 gap-6">
      {img.map((img, index) => (
        <img
          className="object-cover w-full"
          key={index}
          src={img}
          alt={`image of ${img}`}
        />
      ))}
    </div>
  );
}

export default ServicesImg;
