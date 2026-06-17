import Image from "next/image";

type PageHeroProps = {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
};

export function PageHero({ label, title, subtitle, image }: PageHeroProps) {
  return (
    <section
      data-header-theme="dark"
      className="relative flex min-h-[55vh] items-end overflow-hidden bg-navy pt-24"
    >
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 lg:px-10">
        <span className="section-label">{label}</span>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="body-text-light mt-4 max-w-2xl text-[1rem]">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
