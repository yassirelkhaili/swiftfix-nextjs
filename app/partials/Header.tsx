const Header = () => {
  return (
    <>
    <header>
        <nav className="flex flex-row justify-center items-center min-h-[3rem] gap-[35rem]">
            <div className="flex flex-row justify-center items-center gap-2">
                <svg className="nav__logo" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#094B72"/>
                    <path d="M18.32 25.14C17.2933 25.14 16.3733 24.9733 15.56 24.64C14.7467 24.3067 14.0933 23.8133 13.6 23.16C13.12 22.5067 12.8667 21.72 12.84 20.8H16.48C16.5333 21.32 16.7133 21.72 17.02 22C17.3267 22.2667 17.7267 22.4 18.22 22.4C18.7267 22.4 19.1267 22.2867 19.42 22.06C19.7133 21.82 19.86 21.4933 19.86 21.08C19.86 20.7333 19.74 20.4467 19.5 20.22C19.2733 19.9933 18.9867 19.8067 18.64 19.66C18.3067 19.5133 17.8267 19.3467 17.2 19.16C16.2933 18.88 15.5533 18.6 14.98 18.32C14.4067 18.04 13.9133 17.6267 13.5 17.08C13.0867 16.5333 12.88 15.82 12.88 14.94C12.88 13.6333 13.3533 12.6133 14.3 11.88C15.2467 11.1333 16.48 10.76 18 10.76C19.5467 10.76 20.7933 11.1333 21.74 11.88C22.6867 12.6133 23.1933 13.64 23.26 14.96H19.56C19.5333 14.5067 19.3667 14.1533 19.06 13.9C18.7533 13.6333 18.36 13.5 17.88 13.5C17.4667 13.5 17.1333 13.6133 16.88 13.84C16.6267 14.0533 16.5 14.3667 16.5 14.78C16.5 15.2333 16.7133 15.5867 17.14 15.84C17.5667 16.0933 18.2333 16.3667 19.14 16.66C20.0467 16.9667 20.78 17.26 21.34 17.54C21.9133 17.82 22.4067 18.2267 22.82 18.76C23.2333 19.2933 23.44 19.98 23.44 20.82C23.44 21.62 23.2333 22.3467 22.82 23C22.42 23.6533 21.8333 24.1733 21.06 24.56C20.2867 24.9467 19.3733 25.14 18.32 25.14Z" fill="white"/>
                    </svg>                    
                    <span className="not-italic text-xl font-bold tracking-[1.5px] text-defaultText mix-blend-normal font-poppins">
                        SwiftFix
                    </span>
            </div>
            <div className="flex justify-center items-center gap-[8rem]">
                <div>
                    <ul className="flex uppercase gap-[3.5rem]">
                        <li className="not-italic font-normal text-xs leading-[23px] tracking-[1.5px] cursor-pointer text-poppins"><a className="nav__group__items__list__item__link" href="./index.html">Home</a></li>
                        <li className="not-italic font-normal text-xs leading-[23px] tracking-[1.5px] cursor-pointer text-poppins"><a className="nav__group__items__list__item__link" href="./about.html">About</a></li>
                        <li className="not-italic font-normal text-xs leading-[23px] tracking-[1.5px] cursor-pointer text-poppins"><a className="nav__group__items__list__item__link" href="./service.html">Services</a></li>
                        <li className="not-italic font-normal text-xs leading-[23px] tracking-[1.5px] cursor-pointer text-poppins"><a className="nav__group__items__list__item__link" href="./contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="nav__group__search">
                    <svg className="nav__group__search__image" width="66" height="89" viewBox="0 0 66 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.5 52.4218L36.5 47.0907L42.5 52.4218ZM38.5 42.6482C38.5 43.465 38.3189 44.2738 37.9672 45.0283C37.6154 45.7829 37.0998 46.4686 36.4497 47.0461C35.7997 47.6236 35.0281 48.0818 34.1788 48.3943C33.3295 48.7069 32.4193 48.8678 31.5 48.8678C30.5807 48.8678 29.6705 48.7069 28.8212 48.3943C27.9719 48.0818 27.2003 47.6236 26.5503 47.0461C25.9002 46.4686 25.3846 45.7829 25.0328 45.0283C24.6811 44.2738 24.5 43.465 24.5 42.6482C24.5 40.9987 25.2375 39.4168 26.5503 38.2504C27.863 37.084 29.6435 36.4287 31.5 36.4287C33.3565 36.4287 35.137 37.084 36.4497 38.2504C37.7625 39.4168 38.5 40.9987 38.5 42.6482Z" stroke="#2D2F30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                    
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header