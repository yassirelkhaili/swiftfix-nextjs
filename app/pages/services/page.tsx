import Image from "next/image"

const page = () => {
  return (
    <>
    <main>
     <section className="flex flex-row pl-[6rem] bg-backgroundColor py-[6rem]">
            <div className="flex flex-col items-start justify-center gap-[3rem] w-1/2">
                <div className="flex flex-col justify-center items-start gap-[2rem]">
                <h1 className="not-italic font-bold text-[90px] leading-[100%] tracking-[0.02em] text-main m-0 font-playfair">Our Services</h1>
                <p className="not-italic font-medium text-2xl leading-[158%] flex items-center tracking-[0.5px] text-brownText font-jakarta">Discover a world of expert home repair and maintenance services tailored to transform your living space into the sanctuary you've always envisioned.</p>
                <a className="h-[22px] not-italic font-bold text-base leading-[140.5%] flex justify-center items-center tracking-[0.08em] text-whiteText font-jakarta bg-main p-8 rounded-lg" href="./contact.html">Read more</a>
                </div>
            </div>
            <div className="grid grid-cols-[repeat(2,1fr)] gap-4 pr-24 w-1/2">
                <div className="flex justify-center items-start flex-col gap-4 bg-whiteColor shadow-[18px_18px_18px_0px_rgba(0,0,0,0.040)] p-8 rounded-2xl">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.1251 3.08337C17.9186 3.08556 13.4565 6.80591 12.5181 11.9272C16.9996 9.47477 22.6206 11.1197 25.073 15.6012C26.587 18.3679 26.587 21.7154 25.073 24.4821C30.9333 23.4086 34.8138 17.7876 33.7403 11.9272C32.8016 6.80281 28.3348 3.0814 23.1251 3.08337Z" fill="#C3E8F1"/>
                        <path d="M10.7918 33.9167C15.049 33.9167 18.5002 30.4655 18.5002 26.2083C18.5002 21.9511 15.049 18.5 10.7918 18.5C6.53463 18.5 3.0835 21.9511 3.0835 26.2083C3.0835 30.4655 6.53463 33.9167 10.7918 33.9167Z" fill="#027794"/>
                        <path d="M16.9581 10.7916C12.2046 10.7921 8.2252 14.3954 7.75439 19.1256C11.6638 17.446 16.1945 19.2535 17.8742 23.1629C18.7084 25.1045 18.7084 27.3037 17.8742 29.2454C22.9575 28.7399 26.6686 24.2093 26.1632 19.126C25.6927 14.395 21.7124 10.7912 16.9581 10.7916Z" fill="#52A0B4"/>
                        </svg>                        
                    <h4 className="not-italic font-bold text-[22px] leading-[22px] tracking-[0.5px] text-defaultText font-playfair">Equipment Maintenance</h4>
                    <p className="not-italic font-normal text-sm leading-6 tracking-[0.3px] text-greyText font-jakarta">Our equipment maintenance team ensures that your machinery operates at peak efficiency</p>
                </div>
                <div className="flex justify-center items-start flex-col gap-4 bg-whiteColor shadow-[18px_18px_18px_0px_rgba(0,0,0,0.040)] p-8 rounded-2xl">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.2918 9.25H7.7085C5.15419 9.25 3.0835 11.3207 3.0835 13.875V18.0697L13.6245 21.5833H23.3758L33.9168 18.0697V13.875C33.9168 11.3207 31.8461 9.25 29.2918 9.25Z" fill="#C3E8F1"/>
                        <path d="M15.4168 9.25V7.70833H21.5835V9.25H24.6668V7.70833C24.6649 6.00626 23.2856 4.62694 21.5835 4.625H15.4168C13.7148 4.62694 12.3354 6.00626 12.3335 7.70833V9.25H15.4168ZM13.6245 21.5833L3.0835 18.0696V27.75C3.08629 30.3032 5.15533 32.3722 7.7085 32.375H29.2918C31.845 32.3722 33.914 30.3032 33.9168 27.75V18.0696L23.3758 21.5833H13.6245Z" fill="#027794"/>
                        </svg>                        
                    <h4 className="not-italic font-bold text-[22px] leading-[22px] tracking-[0.5px] text-defaultText font-playfair">Facility <br></br>Maintenance</h4>
                    <p className="not-italic font-normal text-sm leading-6 tracking-[0.3px] text-greyText font-jakarta">We provide comprehensive facility maintenance services to keep your premises safe and functional</p>
                </div>
                <div className="flex justify-center items-start flex-col gap-4 bg-whiteColor shadow-[18px_18px_18px_0px_rgba(0,0,0,0.040)] p-8 rounded-2xl">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.3438 22.542L23.6037 25.981C21.6806 27.6574 19.4211 28.9032 16.9769 29.6345L17.9693 34.2644C18.02 34.5008 18.1256 34.722 18.2775 34.9101C18.4294 35.0981 18.6235 35.2479 18.8439 35.3471C19.0644 35.4464 19.3051 35.4925 19.5466 35.4816C19.7881 35.4707 20.0237 35.4031 20.2344 35.2844L26.255 31.8887C27.1024 31.3738 27.7643 30.6031 28.1453 29.6877C28.5263 28.7723 28.6066 27.7595 28.3748 26.7955L27.3438 22.542ZM11.2011 13.5294L14.4212 9.7063L10.4054 8.73739C9.42917 8.39696 8.36269 8.42132 7.40298 8.80597C6.44327 9.19061 5.65517 9.90956 5.18425 10.83L1.79229 16.8424C1.67344 17.053 1.6058 17.2886 1.59485 17.5301C1.58389 17.7717 1.62991 18.0125 1.72921 18.2329C1.8285 18.4534 1.97827 18.6475 2.16642 18.7994C2.35457 18.9513 2.57582 19.0568 2.81229 19.1074L7.54945 20.1229C8.33479 17.7122 9.57432 15.4741 11.2011 13.5294ZM25.7978 13.5917C26.2552 13.5917 26.7023 13.4561 27.0825 13.202C27.4628 12.9479 27.7592 12.5867 27.9343 12.1642C28.1093 11.7416 28.1551 11.2766 28.0659 10.828C27.9766 10.3795 27.7564 9.96742 27.433 9.64401C27.1096 9.3206 26.6975 9.10036 26.2489 9.01113C25.8003 8.9219 25.3354 8.9677 24.9128 9.14272C24.4903 9.31775 24.1291 9.61415 23.875 9.99444C23.6209 10.3747 23.4853 10.8218 23.4853 11.2792C23.4855 11.8924 23.7292 12.4805 24.1628 12.9141C24.5965 13.3478 25.1845 13.5915 25.7978 13.5917Z" fill="#027794"/>
                        <path d="M34.8433 3.17891C34.7737 2.91486 34.6353 2.67399 34.4422 2.48091C34.2491 2.28782 34.0083 2.14944 33.7442 2.07987C30.5817 1.25781 27.2513 1.34596 24.1367 2.33417C21.0221 3.32239 18.2501 5.17045 16.14 7.66543L11.2011 13.5295C8.73384 16.4723 7.16864 20.0648 6.69355 23.8755C6.66308 24.1097 6.68681 24.3478 6.7629 24.5713C6.83898 24.7949 6.9654 24.998 7.1324 25.165L11.9117 29.9443C12.0548 30.0875 12.2247 30.2011 12.4118 30.2786C12.5988 30.3561 12.7992 30.396 13.0017 30.396C13.0461 30.396 13.0905 30.3938 13.1357 30.39C17.0049 30.0703 20.6716 28.5259 23.6036 25.981L29.2509 20.7885C31.7547 18.6839 33.6095 15.9117 34.5995 12.7943C35.5895 9.6769 35.6741 6.34247 34.8433 3.17891ZM25.7977 13.5917C25.3404 13.5917 24.8933 13.456 24.513 13.2019C24.1327 12.9478 23.8363 12.5867 23.6613 12.1641C23.4862 11.7416 23.4404 11.2766 23.5297 10.828C23.6189 10.3794 23.8391 9.96739 24.1625 9.64398C24.486 9.32058 24.898 9.10033 25.3466 9.0111C25.7952 8.92188 26.2601 8.96767 26.6827 9.1427C27.1052 9.31773 27.4664 9.61413 27.7205 9.99441C27.9746 10.3747 28.1102 10.8218 28.1102 11.2792C28.11 11.8924 27.8663 12.4805 27.4327 12.9141C26.999 13.3477 26.411 13.5914 25.7977 13.5917Z" fill="#C3E8F1"/>
                        </svg>                        
                    <h4 className="not-italic font-bold text-[22px] leading-[22px] tracking-[0.5px] text-defaultText font-playfair">Information and Technology</h4>
                    <p className="not-italic font-normal text-sm leading-6 tracking-[0.3px] text-greyText font-jakarta">Our information and technology experts offer cutting-edge solutions for your IT needs</p>
                </div>
                <div className="flex justify-center items-start flex-col gap-4 bg-whiteColor shadow-[18px_18px_18px_0px_rgba(0,0,0,0.040)] p-8 rounded-2xl">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.24984 25.4375C8.18264 25.4375 7.13942 25.1211 6.25208 24.5282C5.36474 23.9353 4.67314 23.0926 4.26474 22.1066C3.85634 21.1206 3.74949 20.0357 3.95769 18.989C4.16589 17.9423 4.67979 16.9809 5.43441 16.2263C6.18903 15.4717 7.15048 14.9578 8.19716 14.7496C9.24385 14.5414 10.3288 14.6482 11.3147 15.0566C12.3007 15.465 13.1434 16.1566 13.7363 17.0439C14.3292 17.9313 14.6457 18.9745 14.6457 20.0417C14.6439 21.4722 14.0749 22.8437 13.0634 23.8552C12.0518 24.8668 10.6804 25.4358 9.24984 25.4375Z" fill="#0388A9"/>
                        <path d="M13.3202 23.5441C12.8207 24.1372 12.1976 24.6139 11.4945 24.941C10.7914 25.2681 10.0253 25.4375 9.24984 25.4375C8.47439 25.4375 7.70831 25.2681 7.00521 24.941C6.30211 24.6139 5.67899 24.1372 5.17944 23.5441C4.06942 24.2323 3.15297 25.1918 2.51648 26.3323C1.88 27.4727 1.54446 28.7565 1.5415 30.0625C1.5415 30.4714 1.70393 30.8635 1.99305 31.1527C2.28217 31.4418 2.6743 31.6042 3.08317 31.6042H15.4165C15.8254 31.6042 16.2175 31.4418 16.5066 31.1527C16.7957 30.8635 16.9582 30.4714 16.9582 30.0625C16.9552 28.7565 16.6197 27.4727 15.9832 26.3323C15.3467 25.1918 14.4303 24.2323 13.3202 23.5441V23.5441ZM27.7498 25.4375C26.6826 25.4375 25.6394 25.1211 24.7521 24.5282C23.8647 23.9353 23.1731 23.0926 22.7647 22.1066C22.3563 21.1206 22.2495 20.0357 22.4577 18.989C22.6659 17.9423 23.1798 16.9809 23.9344 16.2263C24.689 15.4717 25.6505 14.9578 26.6972 14.7496C27.7439 14.5414 28.8288 14.6482 29.8147 15.0566C30.8007 15.465 31.6434 16.1566 32.2363 17.0439C32.8292 17.9313 33.1457 18.9745 33.1457 20.0417C33.1439 21.4722 32.5749 22.8437 31.5634 23.8552C30.5518 24.8668 29.1804 25.4358 27.7498 25.4375Z" fill="#C3E8F1"/>
                        <path d="M31.8202 23.5441C31.3207 24.1372 30.6976 24.6139 29.9945 24.941C29.2914 25.2681 28.5253 25.4375 27.7498 25.4375C26.9744 25.4375 26.2083 25.2681 25.5052 24.941C24.8021 24.6139 24.179 24.1372 23.6794 23.5441C22.5694 24.2323 21.653 25.1918 21.0165 26.3323C20.38 27.4727 20.0445 28.7565 20.0415 30.0626C20.0415 30.4714 20.2039 30.8636 20.493 31.1527C20.7822 31.4418 21.1743 31.6042 21.5832 31.6042H33.9165C34.3254 31.6042 34.7175 31.4418 35.0066 31.1527C35.2957 30.8636 35.4582 30.4714 35.4582 30.0626C35.4552 28.7565 35.1197 27.4727 34.4832 26.3323C33.8467 25.1918 32.9303 24.2323 31.8202 23.5441V23.5441Z" fill="#027794"/>
                        <path d="M26.5276 8.93085L23.4442 5.84751C23.1543 5.56275 22.7636 5.40402 22.3572 5.40586C21.9508 5.4077 21.5615 5.56996 21.2742 5.85734C20.9868 6.14472 20.8245 6.53395 20.8227 6.94036C20.8208 7.34677 20.9796 7.73746 21.2643 8.02743L21.716 8.47914H15.2843L15.736 8.02743C16.0221 7.73772 16.1819 7.34659 16.1806 6.93945C16.1793 6.5323 16.017 6.1422 15.7291 5.8543C15.4412 5.56641 15.0511 5.40411 14.644 5.40284C14.2368 5.40157 13.8457 5.56142 13.556 5.84751L10.4727 8.93085C10.3295 9.07396 10.2159 9.24388 10.1384 9.43091C10.0609 9.61794 10.021 9.8184 10.021 10.0208C10.021 10.2233 10.0609 10.4238 10.1384 10.6108C10.2159 10.7978 10.3295 10.9677 10.4727 11.1109L13.556 14.1942C13.8457 14.4803 14.2368 14.6401 14.644 14.6388C15.0511 14.6375 15.4412 14.4752 15.7291 14.1873C16.017 13.8994 16.1793 13.5093 16.1806 13.1021C16.1819 12.695 16.022 12.3039 15.7359 12.0142L15.2842 11.5625H21.7159L21.2641 12.0142C20.9751 12.3033 20.8127 12.6954 20.8127 13.1042C20.8127 13.513 20.9751 13.9051 21.2642 14.1942C21.5533 14.4833 21.9454 14.6457 22.3543 14.6456C22.7631 14.6456 23.1552 14.4832 23.4442 14.1941L26.5276 11.1108C26.6708 10.9676 26.7843 10.7977 26.8618 10.6107C26.9393 10.4237 26.9792 10.2232 26.9792 10.0208C26.9792 9.81837 26.9393 9.61791 26.8618 9.43089C26.7843 9.24388 26.6708 9.07396 26.5276 8.93085V8.93085Z" fill="#027794"/>
                        </svg>                        
                    <h4 className="not-italic font-bold text-[22px] leading-[22px] tracking-[0.5px] text-defaultText font-playfair">Other Services Of Maintenance</h4>
                    <p className="not-italic font-normal text-sm leading-6 tracking-[0.3px] text-greyText font-jakarta">In addition to maintenance, we offer a range of other services to support your business</p>
                </div>
            </div>
        </section>
        <section>
            <div className="flex justify-center items-center gap-[2rem] pl-[6rem] flex-col my-[4rem]">
                <h2 className="not-italic font-bold text-5xl leading-[64px] text-center tracking-[0.5px] text-defaultText font-playfair font-feature-liga font-feature-salt">Clients Testimonial</h2>
                <div className="flex flex-row justify-center items-center gap-[2rem] max-w-[70vw]">
                    <div className="flex justify-center items-center flex-col gap-[2rem] width-[50%]">
                        <div className="bg-backgroundColor flex flex-col justify-center items-center shadow-[rgba(17,12,46,0.08)_0px_48px_100px_0px] p-4 rounded-2xl">
                            <h3 className="not-italic font-medium text-lg leading-7 text-center text-defaultText font-feature-liga font-feature-salt font-poppins">Incredible Experience</h3>
                            <p className="not-italic font-normal text-sm leading-6 text-center tracking-[0.5px] text-greyText font-feature-liga font-feature-salt font-poppins">We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</p>
                            <div className="w-0 h-0 border-t-backgroundColor translate-y-[1.8rem] border-t-[15px] border-x-[12px] border-x-transparent border-solid"></div>
                        </div>
                        <div className="flex justify-center items-center flex-row gap-[1rem]">
                            <div className="testimonial__person__image">
                                <Image src="./Photo.svg" alt="small profile picture still photo of a client" width="56" height="56"/>
                            </div>
                            <div className="testimonial__person">
                                <h3 className="not-italic font-bold text-lg leading-7 text-blackColor font-feature-liga font-feature-salt font-inter">Sarah Bentaher</h3>
                                <h3 className="not-italic font-normal text-sm leading-6 text-brownText font-feature-liga font-feature-salt font-inter">CEO, MA Industires</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-[2rem] width-[50%]">
                        <div className="bg-backgroundColor flex flex-col justify-center items-center shadow-[rgba(17,12,46,0.08)_0px_48px_100px_0px] p-4 rounded-2xl">
                            <h3 className="not-italic font-medium text-lg leading-7 text-center text-defaultText font-feature-liga font-feature-salt font-poppins">Dependable, Responsive, Professional Partner</h3>
                            <p className="not-italic font-normal text-sm leading-6 text-center tracking-[0.5px] text-greyText font-feature-liga font-feature-salt font-poppins">Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations.</p>
                            <div className="w-0 h-0 border-t-backgroundColor translate-y-[1.8rem] border-t-[15px] border-x-[12px] border-x-transparent border-solid"></div>
                        </div>
                        <div className="flex justify-center items-center flex-row gap-[1rem]">
                            <div className="testimonial__person__image">
                                <Image src="./images/Photo2.svg" alt="small profile picture still photo of a client" width="56" height="56"/>
                            </div>
                            <div className="testimonial__person">
                                <h3 className="not-italic font-bold text-lg leading-7 text-blackColor font-feature-liga font-feature-salt font-inter">Salima Alami</h3>
                                <h3 className="not-italic font-normal text-sm leading-6 text-brownText font-feature-liga font-feature-salt font-inter">CEO, FOODSO GROUP</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <svg width="54" height="10" viewBox="0 0 54 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_10_426)">
                    <circle cx="5" cy="5" r="4.5" fill="#C3E8F1" stroke="#C3E8F1"/>
                    <circle opacity="0.5" cx="27" cy="5" r="4" stroke="#C3E8F1" stroke-width="2"/>
                    <circle opacity="0.5" cx="49" cy="5" r="4" stroke="#C3E8F1" stroke-width="2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_10_426">
                    <rect width="54" height="10" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>                    
            </div>
        </section>
        </main>
    </>  
    )
}

export default page