import React, { useEffect, useState } from 'react';
import { HeaderList } from '../utils/helper';
import { SearchIcon } from '../utils/icon';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    const closeNavbar = () => setOpen(false);
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };

        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className=' bg-blue'>
            <div className='relative z-20 w-full'>
                <Link to="/">
                    <img className='lg:block hidden w-fit mx-auto' src="./assets/images/webp/logo-mark.webp" alt="logo" />
                </Link>
            </div>
            <div className="flex justify-between bg-blue w-full">
                <div className='container bg-blue lg:py-6 flex justify-between'>
                    <div className={`flex bg-blue gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center ${open ? 'max-lg:z-10 max-lg:translate-x-0 max-lg:bg-black max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full justify-between items-center' : 'max-lg:-left-full max-lg:hidden'}`}>
                        {HeaderList.map((obj, i) => (                            
                                <ul className='pt-5' key={i}>
                                    <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5'>
                                        <a onClick={closeNavbar} href={obj.link} className='text-[13px] font-normal text-white'>{obj.item}</a>
                                    </li>
                                </ul>
                        ))}
                        <div className="flex p-[9px] pl-[22px] bg-blue-500 items-center max-w-[476px] justify-between max-sm:pl-3 max-lg:mx-auto border border-white rounded-md xl:ml-[470px] lg:ml-80">
                            <input
                                type="text"
                                placeholder="Search by Keyword"
                                className="placeholder:text-white text-white placeholder:text-base placeholder:font-normal w-full !outline-none !bg-transparent placeholder:max-lg:text-sm mr-2"
                            />
                            <SearchIcon />
                        </div>
                    </div>

                </div>
            </div>
            <div className=" lg:hidden  flex justify-between pt-4 bg-blue w-full px-5">
                <Link to = "/">
                    <img className='max-w-[105px] lg:hidden block' src="./assets/images/webp/logo.webp" alt="logo" />
                </Link>
                <div onClick={toggleSidebar} className='relative z-20 flex-col gap-1 lg:hidden flex'>
                    <span className={`${open ? 'w-8 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -translate-x-10 opacity-0' : 'w-8 h-1 rounded bg-white'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                    <div className='text-white -ml-2'>MENU</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
