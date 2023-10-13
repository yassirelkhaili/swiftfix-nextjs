import Image from "next/image"

const page = () => {
  return (
    <>
    <main>
            <section className="flex flex-row pl-[6rem]">
            <div className="w-1/2 flex flex-col items-start justify-center gap-[3rem]">
                <div className="flex flex-col justify-center items-start gap-[2rem]">
                <h1 className="not-italic font-bold text-[90px] leading-[100%] tracking-[0.02em] text-main m-0 font-playfair">Our Story</h1>
                <p className="not-italic font-medium text-2xl leading-[158%] flex items-center tracking-[0.5px] text-brownText font-jakarta">Over the years, we've mastered the art of reviving spaces, from patching up leaky roofs to refurbishing kitchens. With each project, we strive to narrate a tale of quality craftsmanship, reliability, and genuine care. We invite you to be a part of our story, where we envision a home that mirrors your dreams and reflects our commitment to excellence.</p>
                <a className="h-[22px] not-italic font-bold text-base leading-[140.5%] flex justify-center items-center tracking-[0.08em] text-whiteText font-jakarta bg-main p-8 rounded-lg" href="./contact.html">Read more</a>
                </div>
            </div>
            <div className="hero__image w-1/2">
                <Image src="../HeroImage(1).svg" alt="maintenance man" width="811" height="690" priority/>
            </div>
        </section>
        <section className="flex flex-row pl-[6rem] justify-center items-center bg-backgroundColor mt-[8rem]">
            <div className="hero__image">
                <Image src="../professional-img1.svg" alt="maintenance man" width="602" height="694"/>
            </div>
            <div className="hero__content">
                <div className="flex flex-col items-start gap-[1rem] justify-center pb-[5.5rem]">
                <h2 className="not-italic font-bold text-6xl leading-[100%] tracking-[0.02em] text-main m-0 font-playfair">Repair and Maintenance Service</h2>
                <p className="not-italic font-normal text-2xl leading-9 max-w-[60vw] tracking-[0.5px] text-greyText font-poppins">We are here to assist businesses and projects in Morocco with consulting for repair and maintenance.</p>
                </div>
            </div>
        </section>
        </main>
    </>
  )
}

export default page