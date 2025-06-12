export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f9fafb] py-28 px-6 md:px-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 top-[-200px] left-[-200px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-pink-100 rounded-full blur-2xl opacity-50 bottom-[-100px] right-[-100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
          Launch a Stunning Site in <span className="text-blue-600">48 Hours</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          A bespoke, mobile-first website that feels premium — delivered fast and built to convert. Just £249, all in.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="#examples"
            className="text-blue-600 font-medium px-8 py-3 rounded-md border border-blue-200 bg-white hover:border-blue-400 transition"
          >
            See Examples
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-400 tracking-wide uppercase">
          Trusted by growing businesses across the UK
        </p>

        <div className="flex justify-center items-center gap-10 mt-6 opacity-80 grayscale">
          <img src="/logo-placeholder-1.svg" alt="Brand 1" className="h-6" />
          <img src="/logo-placeholder-2.svg" alt="Brand 2" className="h-6" />
          <img src="/logo-placeholder-3.svg" alt="Brand 3" className="h-6" />
        </div>
      </div>
    </section>
  );
}