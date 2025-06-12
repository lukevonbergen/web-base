export default function HeroSection({
  headline = "Your Headline Here",
  subheadline = "Grab Attention in One Bold Sentence",
  description = "Use this space to quickly explain what your product or service does and why it matters.",
  ctaText = "Get Started",
  ctaLink = "#contact",
  logos = [],
}) {
  return (
    <section className="bg-white text-black py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          <span className="underline decoration-blue-500 underline-offset-4">
            {headline}
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          {subheadline}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          {description}
        </p>
        <a
          href={ctaLink}
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium text-lg transition"
        >
          {ctaText}
        </a>

        {logos.length > 0 && (
          <>
            <p className="mt-12 text-sm text-gray-500 uppercase tracking-wide">
              Trusted by:
            </p>
            <div className="mt-6 flex justify-center flex-wrap gap-6 opacity-60 grayscale">
              {logos.map((logo, i) => (
                <img key={i} src={logo} alt={`Logo ${i + 1}`} className="h-6" />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}