

export default function Gift() {
  return (
    <section className="w-full bg-white">
      {/* Outer 1440 wrapper */}
      <div className="max-w-[1440px] mx-auto">
        {/* Inner content (1175px) */}
        <div className="max-w-[1175px] mx-auto flex flex-col md:flex-row items-center gap-[52px] px-6 py-16">
          
          {/* LEFT SIDE */}
          <div className="flex-1">
            <span className="bg-black text-white px-12 py-2 capitalize rounded-[60px] text-sm md:text-base font-poppins">
              We’re more than just beekeepers
            </span>

            <h2 className="mt-[21px] leading-[50px] text-[40px] md:text-[48px] font-bold font-poppins">
              Nature’s Gift, Preserved for You
            </h2>

            <p className="mt-[19px] text-[18px] leading-[25px] letter-spacing-[0%] font-normal font-poppins capitalize">
              At Al Baraka Honey, we don’t just bottle honey — we preserve the richness of nature. 
              Every jar is filled with raw, unprocessed honey that retains all the natural enzymes, 
              antioxidants, and nutrients your body deserves. From hive to home, our honey is handled 
              with care to ensure purity and freshness in every drop.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex justify-center">
            <img
              src="/bee.png"
              alt="Honey Gift"
              className="w-full max-w-[581px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
