import React from 'react';
import { Lalezar } from 'next/font/google';
import Link from 'next/link';

//Navigation Bar for Dashboard.
const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });

export const Navbar = () => {
    const routesList = [
        { href: "/dashboard", name: "Overview" },
        { href: "/projects", name: "Projects" },
        { href: "/groups", name: "Groups" },
        { href: "/profile", name: "Profile" },
        { href: "/about-us", name: "About us" },
    ];

    return (
        <>
            <nav className='block drop-shadow-lg bg-gray-200 p-4'>
                <ul className="flex justify-around font-bold text-slate-900">
                    <span className={`changeable_text__color text-4xl ${lalezar.className}`}>EcoCrowd</span>
                    {routesList.map((v, key) => {
                        return (
                            <li className='my-auto duration-300 hover:scale-105 hover:text-green-900' key={key}><Link href={v.href}>{v.name}</Link></li>
                        )
                    })};
                </ul>
            </nav>
        </>
    )
}
