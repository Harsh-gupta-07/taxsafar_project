export function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <h2 className="font-headline text-6xl md:text-8xl font-black text-on-surface mb-12 tracking-tighter italic leading-none">
          Ready to Simplify Your{" "}
          <span className="text-primary">Financial</span> Journey?
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button className="cursor-pointer bg-primary text-on-primary text-xl px-12 py-6 rounded-xl font-bold editorial-shadow hover:scale-105 transition-transform">
            Schedule Your First Session
          </button>
          <p className="text-on-surface-variant font-medium">
            Trusted by over 10,000+ growing businesses nationwide.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-container/10 rounded-full blur-[120px]" />
    </section>
  );
}

