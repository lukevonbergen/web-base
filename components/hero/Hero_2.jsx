export default function HeroSectionIntermediate() {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
            Launch a Website <span className="text-blue-600">That Converts</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We build clean, high-performance sites for small businesses — fast turnaround, no fluff, all function.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-base hover:bg-blue-700 transition"
            >
              Start Your Site
            </a>
            <a
              href="#examples"
              className="text-blue-600 border border-blue-200 bg-white px-6 py-3 rounded-md font-medium hover:border-blue-400 transition"
            >
              View Examples
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400 tracking-wide uppercase">
            Trusted by 100+ small brands
          </p>
          <div className="flex items-center gap-6 mt-4 opacity-80 grayscale">
            <img src="/logo-placeholder-1.svg" alt="Brand 1" className="h-5" />
            <img src="/logo-placeholder-2.svg" alt="Brand 2" className="h-5" />
            <img src="/logo-placeholder-3.svg" alt="Brand 3" className="h-5" />
          </div>
        </div>

        {/* Optional Image / Screenshot / Illustration */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/hero-example-image.png"
              alt="Website example"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
