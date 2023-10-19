import { Lalezar } from 'next/font/google';
import Link from 'next/link';

const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });

//Home landing page.
export default function Home() {
  return (
    <>
      <main className='flex h-screen mx-auto justify-around'>
        <div className='changeable_button__color flex flex-col w-1/2'>
          <h1 className='growing_plant m-auto text-[20em]'>🍁</h1>
        </div>
        <div className='flex w-2/3 flex-col text-center justify-around'>
          <h1 className={`changeable_text__color ${lalezar.className} text-9xl font-regular drop-shadow-2xl`}>EcoCrowd</h1>
          <p className='text-7xl w-3/4 mx-auto font-extrabold drop-shadow-2xl'>Let your project change the world.</p>
          <p className='text-4xl w-1/2 mx-auto font-semibold drop-shadow-2xl'>Don&quot;t have the funds? let the crowd help.🍃</p>
          <Link className='bg-[#A1ED18] text-3xl mx-auto font-extrabold p-6 duration-300 hover:scale-105 hover:bg-green-900 hover:text-teal-200 rounded-lg drop-shadow-2xl' href="/dashboard">🌎Make Change Now</Link>
        </div>
      </main>
    </>
  )
}
