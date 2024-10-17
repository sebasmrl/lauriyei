'use client';

import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";


export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }
     
    const pathname = usePathname();

    return (
        <>
            <nav className=" flex justify-end h-full">
                <div className="hidden md:flex justify-between w-full">
                    <NavLinks pathname={pathname} />
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        name="menu-boton"
                        onClick={toggleIsOpen}
                    >
                        <IoClose className={`${isOpen ? '':'hidden'  } animate-c-fade-in`}/> 
                        <FiMenu className={`${isOpen?'hidden':''} animate-c-fade-in`}/>
                    </button>
                </div>
            </nav>

            { isOpen &&
            <div className='md:hidden flex flex-col items-center basis-full animate-c-fade-in' 
                onClick={ toggleIsOpen }
            >
                <NavLinks pathname={pathname} />
            </div>
            }
        </>
    )
}




