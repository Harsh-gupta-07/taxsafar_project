export function TrustStrip() {
  return (
    <section className="py-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" data-icon="groups">
                  groups
                </span>
              </div>
              <p className="text-2xl font-headline font-bold text-on-surface">
                50+ Individual CA Freelancers
              </p>
            </div>
            <div className="hidden md:block w-px h-8 bg-outline-variant/30" />
            <p className="text-sm text-on-surface-variant font-label uppercase tracking-widest">
              Global Expertise Network
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-end">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1 text-primary">
                <span
                  className="material-symbols-outlined"
                  data-icon="star"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  data-icon="star"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  data-icon="star"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  data-icon="star"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  data-icon="star_half"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star_half
                </span>
              </div>
              <p className="text-3xl font-headline font-black text-on-surface">
                A+ Rating
              </p>
              <p className="text-sm text-on-surface-variant font-label uppercase tracking-widest">
                4.78 (10k+ Reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
