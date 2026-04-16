import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden pt-12">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 relative z-10">
          <span className="inline-block text-primary font-bold tracking-widest uppercase text-xs mb-6 px-3 py-1 bg-secondary-container rounded-full">
            Premier Financial Custodians
          </span>
          <h1 className="font-headline text-6xl md:text-8xl text-on-surface font-black tracking-tighter leading-[0.9] mb-8">
            We Provide Your{" "}
            <span className="text-primary italic">Business</span> Solutions
          </h1>
          <p className="text-on-surface-variant text-xl md:text-2xl max-w-xl leading-relaxed mb-10 font-light">
            Simplifying legalities and financial compliance with editorial
            precision. We bridge the gap between complex tax laws and your
            business growth.
          </p>
          <div className="relative max-w-lg">
            <div className="bg-surface-container-lowest rounded-xl editorial-shadow p-2 flex items-center group focus-within:ring-2 ring-primary/20 transition-all">
              <span
                className="material-symbols-outlined ml-4 text-outline"
                data-icon="search"
              >
                search
              </span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline-variant px-4 py-3"
                placeholder="Search for filing, GST, or tax services..."
                type="text"
              />
              <button className="cursor-pointer bg-primary text-on-primary px-8 py-3 rounded-lg font-bold text-sm tracking-wide transition-all hover:opacity-90">
                Find Solution
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px]" />
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] bg-surface-container shadow-2xl">
            <Image
              alt="Professional consultant"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              data-alt="Sophisticated portrait of a professional male finance expert in a tailored charcoal suit standing against a minimalist light green office background"
              src="/main.webp"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              unoptimized
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-primary-container p-2 rounded-lg">
                  <span
                    className="material-symbols-outlined text-white"
                    data-icon="verified_user"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-primary">
                    Certified Expertise
                  </p>
                  <p className="text-on-surface font-headline text-lg italic">
                    Licensed CA Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

