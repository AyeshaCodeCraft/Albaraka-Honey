

// src/pages/sections/ContactForm.tsx

const ContactForm = () => {
    return (
        <section className="relative w-full -mt-30 md:-mt-38 z-20 font-poppins">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="bg-black text-white rounded-[30px] md:rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 shadow-lg">

                    {/* Left Side Form */}
                    <form className="flex-1 flex flex-col gap-5 order-2 md:order-1">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="appearance-none w-full px-4 py-3 rounded-[60px] border border-[#D3D3D340] focus:border-amber-400 bg-gray-800 text-white outline-none"
                        />
                        <input
                            type="email"
                            placeholder="E-mail Address"
                            className="w-full px-4 py-3 rounded-[60px] border border-[#D3D3D340] focus:border-amber-400 bg-gray-800 text-white outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={8}
                            className="w-full px-4 py-3 rounded-[25px] border border-[#D3D3D340] focus:border-amber-400 bg-gray-800 text-white outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-semibold rounded-[30px] py-3 hover:bg-amber-100 transition"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Right Side Info */}
                    <div className="flex-1 flex flex-col order-1 md:order-2 mt-[50px]">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ask Us Anything
                        </h2>
                        <p className=" mb-6 max-w-md capitalize">
                            Our mission is simple: to bring the freshest, most Purest Honey produce directly from our fields to your Home.
                        </p>

                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center ">
                                    <img src="/call-icon.png" alt="call" className="w-[38px] h-auto cursor-pointer" />
                                </span>
                                <span className="text-sm md:text-base font-medium text-gray-200">
                                    +92 304 1980001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center">
                                    <img src="/facebook.png" alt="facebook" className="w-[38px] h-auto cursor-pointer" />
                                </span>
                                <span className="text-sm md:text-base font-medium text-gray-200">
                                    Albaraka Honey
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center">
                                    <img src="/instagram.png" alt="instagram" className="w-[32px] h-auto cursor-pointer" />
                                </span>
                                <span className="text-sm md:text-base font-medium text-gray-200">
                                    the Al Barakahoney
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center font-bold">
                                    <img src="/tiktokContact.png" alt="tiktok" className="w-[38px] h-auto cursor-pointer" />
                                </span>
                                <span className="text-sm md:text-base font-medium text-gray-200">
                                    Albaraka Honey 713
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
