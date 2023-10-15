"use client";
import { stringDispatcher } from '@/interfaces/auth';
import Link from 'next/link';
import React from 'react';

interface Props {
  controller: stringDispatcher
}

export const RegisterComponent: React.FC<Props> = ({ controller }) => {
  return (
    <div className="flex flex-col drop-shadow-lg items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link href="/" className="flex items-center mb-6 text-2xl font-bold text-gray-200">
        🍃EcoCrowd
      </Link>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Open your EcoCrowd Account!
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Username</label>
              <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" placeholder="John Doe" required/>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" placeholder="name@company.com" required/>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" required/>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
              <input type="password" name="cpassword" id="cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" required/>
            </div>
            <button type="submit" className="w-full duration-300 text-slate-900 bg-teal-400 hover:scale-105 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
            <p className="text-sm font-light text-gray-500">
              Already have an account? <a onClick={() => controller("login")} href="#" className="font-medium text-teal-600 hover:underline">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
