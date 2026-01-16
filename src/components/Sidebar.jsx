import Profile from '../assets/profil-kartun.png';
import logo from "../assets/logo-todo.png"; //logo todo

// icon
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaTasks } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';

export default function Sidebar() {
    const menuItem = [
        { label: 'Home', icon: FaHome},
        { label: 'Profil', icon: CgProfile},
        { label: 'My Task', icon: FaTasks},
        { label: 'Setting', icon: IoMdSettings},
        { label: 'Logout', icon: BiLogOut,}
    ]

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('label');

    return (
        <nav className={`${open ? 'lg:w-56 md:w-40 w-14' : 'lg:w-16 md:w-12 w-10'} h-screen bg-slate-50 shadow-xl flex flex-col transition-all duration-500`} >
            {/* header */}
            <div className="w-full h-24 flex justify-end items-center border-b-2">
                {open && (
                    <img src={logo} alt='Todo-List' className='lg:mx-7 lg:w-30 md:mx-5 md:w-20 hidden sm:block'/>
                )}
                <GiHamburgerMenu className="mr-3 cursor-pointer lg:w-8 lg:h-8 md:w-6 md:h-6 w-6 h-6" onClick={() => setOpen(!open)} />
            </div>

            {/* body */}
            <ul className="flex flex-col flex-1 my-3">
                {menuItem.map((item, index) => (
                    <li key={index} onClick={() => setActive(item.label)} className={`relative group flex p-3 items-center cursor-pointer ${active === item.label ? 'bg-slate-300 font-bold' : 'hover:bg-slate-200'}`}>
                        <item.icon className="mx-1 lg:w-7 lg:h-7 md:w-5 md:h-5 w-5" />
                        {open && (
                            <span className='ml-4 font-semibold hidden sm:block'>
                                {item.label}
                            </span>
                        )}

                        {/* tooltip */}
                        {!open && (
                            <span className='absolute left-18 bg-slate-800 text-white text-sm px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap'>
                                {item.label}
                            </span>)}
                    </li>
                ))}
            </ul>



            {/* footer */}
            <div className="h-16 flex items-center lg:gap-2 md:gap-0 px-1 border-t border-slate-300">
                <img src={Profile} alt="Profile" className='w-10 rounded-full' />

                {open && (
                    <div className='px-1 hidden sm:block'>
                        <p className="font-medium">Marwan</p>
                        <span className="lg:text-sm sm:text-xs text-gray-500 lg:font-medium sm:font-light">email123@gmail.com</span>
                    </div>
                )}
            </div>
        </nav>
    )
}