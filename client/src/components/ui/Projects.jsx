export default function Projects({ name, img, alt, type, priority = false }) {
  return (
    <div>
      <div
        className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
          loading={priority ? "eager" : "lazy"}
          fetchpriority={priority ? "high" : "auto"}
        />
      </div>
      <div className="mt-4">
        <div className="2xl:space-y-3">
        <h3 className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200">
          {name}
        </h3>
        <p className="text-body-2 2xl:text-4xl font-light text-primary-400">{type}</p>
        </div>
      </div>
    </div>
  );
}
