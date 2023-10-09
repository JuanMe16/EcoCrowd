import React from 'react';
import { Lalezar } from 'next/font/google';
import Link from 'next/link';

const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });

export const Navbar = () => {

    return (
        <>
            <nav className='block drop-shadow-lg bg-gray-200 p-4'>
                <ul className="flex justify-around font-bold text-slate-900">
                    <span className={`changeable_text__color text-4xl ${lalezar.className}`}>EcoCrowd</span>
                    <Link className='my-auto duration-300 hover:scale-105 hover:text-green-900' href="/dashboard">Overview</Link>
                    <Link className='my-auto duration-300 hover:scale-105 hover:text-green-900' href="/projects">Projects</Link>
                    <Link className='my-auto duration-300 hover:scale-105 hover:text-green-900' href="/about-us">About EcoCrowd</Link>
                </ul>
            </nav>
        </>
    )
}
