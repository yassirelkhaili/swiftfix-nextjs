const page = () => {
  return (
    <>
        <main>
        <section className="flex flex-row gap-[2rem] justify-center items-center pl-[6rem] py-[6rem] bg-backgroundColor">
            <div className="flex flex-col gap-[2rem] justify-center items-start">
                <div className="flex flex-col justify-center items-start gap-[2rem]">
                <h1 className="not-italic font-bold text-[90px] leading-[100%] tracking-[0.02em] text-main m-0 font-playfair">Contact Us</h1>
                <p className="not-italic font-medium text-2xl leading-[158%] flex items-center tracking-[0.5px] text-brownText font-jakarta">Have questions, need assistance, or looking to get started on your home improvement journey? Feel free to reach out by filling out the form below. We're here to listen and ready to help you every step of the way. Your dream home is just a message away.</p>
                <a className="h-[22px] not-italic font-bold text-base leading-[140.5%] flex justify-center items-center tracking-[0.08em] text-whiteText font-jakarta bg-main p-8 rounded-lg gap-1" href="./contact.html">
                    <svg className="questions__link__icon" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>
            <div className="flex flex-col justify-center items-center pr-[4rem]">
                    <form className="flex justify-center items-center flex-col gap-4 bg-whiteColor shadow-[18px_18px_18px_0px_rgba(0,0,0,0.040)] w-[40rem] px-16 py-8 rounded-2xl">
                        <label htmlFor="name"></label>
                        <input type="text" className="focus:outline-none focus:border-b-main focus:placeholder:text-main font-poppins border-b-greyText not-italic font-medium text-xl leading-[30px] text-greyText w-full transition duration-300 ease-in-out p-2 border-b-[3px] outline-none border-solid" id="name" placeholder="Your name" autoFocus/>
                        <label htmlFor="email"></label>
                        <input type="text" className="focus:outline-none focus:border-b-main focus:placeholder-main font-poppin not-italic font-medium border-b-greyText text-xl leading-[30px] text-greyText w-full transition duration-300 ease-in-out p-2 border-b-[3px] outline-none border-solid" id="email" placeholder="Your email"/>
                        <label htmlFor="subject"></label>
                        <input type="text" className="focus:outline-none focus:border-b-main focus:placeholder-main font-poppins  not-italic font-medium border-b-greyText text-xl leading-[30px] text-greyText w-full transition duration-300 ease-in-out p-2 border-b-[3px] outline-none border-solid" id="subject" placeholder="Your message"/>
                        <label htmlFor="message"></label>
                        <input type="text" className=" focus:outline-none focus:border-b-main focus:placeholder-main font-poppins not-italic font-medium border-b-greyText text-xl leading-[30px] text-greyText w-full transition duration-300 ease-in-out p-2 border-b-[3px] outline-none border-solid" id="message" placeholder="Your subject"/>
                        <label htmlFor="referral"></label>
                        <input type="text" className="focus:outline-none focus:border-b-main focus:placeholder-main font-poppins not-italic font-medium border-b-greyText text-xl leading-[30px] text-greyText w-full transition duration-300 ease-in-out p-2 border-b-[3px] outline-none border-solid" id="referral" placeholder="How did you head about us?"/>
                        <div className="flex flex-row justify-center items-center gap-[0.4rem] not-italic font-medium text-xl leading-[30px] text-main font-poppins pt-[0.8rem]">
                        <input type="checkbox" className="appearance-none text-main w-[0.9em] h-[0.9em] border-main grid place-content-center m-0 border-[0.15em] border-solid before:content[''] before:bg-main before:w-[0.9em] before:h-[0.9em] before:scale-0 transition duration-300 ease-in-out before:transition before:duration-100 before:ease-in-out" id="terms" />
                        <label htmlFor="terms" className="font-poppins text-main font-[500]">I agree to the <a href="_blank" className="underline text-main">Terms and Conditions</a></label>
                        </div>
                        <button type="submit" className="h-[22px] not-italic font-bold text-base leading-[140.5%] flex justify-center items-center tracking-[0.08em] text-whiteText font-jakarta bg-main p-8 rounded-lg gap-1">
                            Send enquiry
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807612 13.9792 0.807612 13.3934 1.3934C12.8076 1.97918 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM0 13.5L24 13.5V10.5L0 10.5L0 13.5Z" fill="white"/>
                        </svg>                                
                        </button>
                    </form>
            </div>
        </section>
        </main>
    </>
  )
}

export default page