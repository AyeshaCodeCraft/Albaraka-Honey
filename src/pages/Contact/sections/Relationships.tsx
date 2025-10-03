// src/pages/sections/Relationships.tsx
const Relationships = () => {
  return (
    <section className="w-full bg-white flex justify-center py-12 md:py-20">
      <div className="w-full max-w-[1440px] px-4 md:px-8">
        {/* Inner wrapper (content width) */}
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-[90px] md:gap-20">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8 max-w-[500px]">
            {/* Heading + Intro */}
            <div>
              <h2 className="text-[40px] md:text-4xl font-bold  leading-[50px] font-poppins ">
                Building Relationships Based on Trust, Integrity.
              </h2>
              <p className="mt-[17px] text-[18px] font-normal md:text-lg leading-[28px] font-poppins capitalize ">
                At Al Baraka Honey, we believe in honesty and authenticity.
                Our honey is harvested naturally, without artificial additives,
                ensuring every drop is pure, safe, and packed with nutrition.
                From hive to home, we deliver nature’s sweetness with
                integrity and care.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {/* Feature 1 */}
              <div className="flex flex-col items-start gap-3">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#302A25] overflow-hidden">
                  <img
                    src="/trustLogo1.png"
                    alt="Trust Icon"
                    className="w-[32px] h-[32px] object-contain"
                  />
                </div>
                <h3 className="text-[32px] font-bold ">3+</h3>
                <h4 className="text-[16px] font-semibold">
                  Premium Honey Varieties
                </h4>
                <p className=" text-sm md:text-[14px] leading-relaxed">
                  We proudly offer rare wild honey from Apis mellifera,
                  Apis florea, and the unique Berry Bee Honey, giving
                  you rich flavors from nature’s finest sources.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start gap-3">
                <div className="w-14 h-14 flex items-center justify-center rounded-md bg-[#302A25] overflow-hidden">
                  <img
                    src="/trustLogo2.png"
                    alt="Natural Icon"
                    className="w-[32px] h-[32px] object-contain"
                  />
                </div>
                <h3 className="text-[32px] font-bold ">100%</h3>
                <h4 className="text-[16px] font-semibold ">
                  Natural & Chemical-Free
                </h4>
                <p className=" text-sm md:text-[14px] leading-relaxed">
                  Our honey is free from preservatives, sugar syrups,
                  and chemicals — just pure, raw goodness as nature intended.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/trust.png"
              alt="Honey Jar"
              className="w-full max-w-[600px] md:max-w-[700px] object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relationships;



