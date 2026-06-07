export function SectionHeading({
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
      <h2 className="font-display text-3xl font-black leading-[1.08] tracking-normal sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base md:mt-4">
        {description}
      </p>
    </div>
  );
}
