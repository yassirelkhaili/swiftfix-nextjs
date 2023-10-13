import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section className="flex flex-row pl-[6rem]">
            <div className="w-1/2 flex flex-col items-start justify-center gap-[3rem]">
                <div className="flex flex-col justify-center items-start gap-[2rem]">
                <h1 className="not-italic font-bold text-[90px] leading-[100%] tracking-[0.02em] text-main m-0 font-playfair">Repair and Maintenance Service</h1>
                <p className="not-italic font-medium text-2xl leading-[158%] flex items-center tracking-[0.5px] text-brownText font-jakarta">We are here to help you take care of your repair and maintenance needs with the best service tailored <br></br>just for you.</p>
                <a className="h-[22px] not-italic font-bold text-base leading-[140.5%] flex justify-center items-center tracking-[0.08em] text-whiteText font-jakarta bg-main p-8 rounded-lg" href="./contact.html">Contact us</a>
                </div>
                <div className="flex flex-col gap-[2rem]">
                    <p className="not-italic font-normal text-[22px] leading-[140.5%] flex items-center tracking-[0.04em] text-greyText font-jakarta">Top trusted companies in Morocco</p>
                    <img src="Group25.svg" alt="companies logos"></img>                                  
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center gap-[2rem]">
                <Image src="HeroImage.svg" alt="maintenance man" width="751" height="836" priority/>
                <div className="flex justify-center items-center gap-[0.2rem] flex-col shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] max-w-xs bg-whiteText px-8 py-4 rounded-lg">
                    <h3 className="not-italic font-bold text-2xl leading-9 text-altColor font-jakarta">Abdellah Benjelloun</h3>
                    <p className="not-italic font-medium text-base leading-9 text-greyText font-jakarta">-Maintenance Expert</p>
                </div>
            </div>
        </section>
        <section>
            <div className="max-w-[100vw] bg-main bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col gap-8 mt-32 px-0 py-16">
                <div className="not-italic font-black text-5xl leading-[64px] text-center tracking-[0.005em] text-whiteText font-jakarta">
                    <h2 className="not-italic font-black text-5xl leading-[64px] text-center tracking-[0.005em] text-whiteText font-playfair font-feature-salt font-feature-liga">Some count that matters</h2>
                    <p className="not-italic font-normal text-lg leading-8 text-center tracking-[0.5px] text-whiteText font-poppins font-feature-liga font-feature-salt">Our achievement in the journey depicted in numbers</p>
                </div>
                <div className="flex flex-row gap-[1rem]">
                    <div className="border-r-borderColor px-8 py-0 border-r-2 border-solid">
                        <div className="not-italic font-extrabold text-5xl leading-[64px] text-center text-whiteText font-poppins font-feature-liga font-feature-salt">25</div>
                        <div className="not-italic font-normal text-lg leading-8 text-center tracking-[0.003em] text-whiteText font-poppins font-feature-liga font-feature-salt">Clients</div>
                    </div>
                    <div className="border-r-borderColor px-8 py-0 border-r-2 border-solid">
                        <div className="not-italic font-extrabold text-5xl leading-[64px] text-center text-whiteText font-poppins font-feature-liga font-feature-salt">100+</div>
                        <div className="not-italic font-normal text-lg leading-8 text-center tracking-[0.003em] text-whiteText font-poppins font-feature-liga font-feature-salt">Taken business legalities</div>
                    </div>
                    <div className="px-8 py-0">
                        <div className="not-italic font-extrabold text-5xl leading-[64px] text-center text-whiteText font-poppins font-feature-liga font-feature-salt">5</div>
                        <div className="not-italic font-normal text-lg leading-8 text-center tracking-[0.003em] text-whiteText font-poppins font-feature-liga font-feature-salt">Years of Journey</div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="flex justify-center items-start flex-col gap-[2rem] mb-[8rem] pl-[6rem]">
                <h2 className="not-italic font-bold text-5xl leading-[64px] text-center tracking-[0.5px] text-defaultText font-playfair font-feature-liga font-feature-salt mt-8">Complex Questions?</h2>
                <div className="not-italic font-normal text-2xl leading-9 max-w-[60vw] tracking-[0.5px] text-greyText font-poppins">Request for a personalized budget for your legal problem. We will send you a coupe options in 24 hours. You can have free consult , if a our first customer</div>
                <a className="w-[180px] h-[22px] gap-1 block not-italic font-bold text-base leading-[140.5%] flex items-center tracking-[0.08em] text-whiteText bg-main font-jakarta p-8 rounded-lg" href="./contact.html">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_10_513)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.637 16.6298C23.4901 21.9471 24.8179 15.7955 28.5446 19.1797C32.1374 22.4436 34.2024 23.0975 29.6503 27.2329C29.0802 27.6493 25.4574 32.6589 12.7259 21.0928C-0.00727797 9.52525 5.50243 6.22984 5.96079 5.71185C10.5239 1.56505 11.2311 3.45243 14.8239 6.71636C18.5506 10.1019 11.7839 11.3125 17.637 16.6298Z" fill="#F9F8F9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_10_513">
                    <rect width="31.4308" height="32" fill="white" transform="translate(0.716888)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Call now
                </a>
            </div>
        </section>
    </main>
  )
}
