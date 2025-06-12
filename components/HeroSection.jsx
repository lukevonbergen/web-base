export default function HeroSection() {
  return (
    <section className="py-28 text-center bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Your <span className="underline decoration-blue-500">Business Website</span><br />
          Live in <span className="text-blue-600">48 Hours</span> for £249
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Beautiful, mobile-first websites built fast, priced right, and tailored to your brand.
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}