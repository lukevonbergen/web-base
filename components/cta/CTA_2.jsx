export default function CallToActionIntermediate() {
  return (
    <section className="relative bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://picsum.photos/1600/800?grayscale&blur=2')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            Ready to Launch Something Great?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Let’s build a fast, beautiful website that actually works for your business.
          </p>
          <a
            href="/start"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}