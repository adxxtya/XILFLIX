import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import { BsFillCameraReelsFill, BsDiscFill, BsTvFill } from 'react-icons/bs'


function Navbar() {
  
  const { logout } = useAuth()

  return (
    <>
      <nav className='flex w-full p-4
                      justify-around
                      md:justify-start md:gap-4
                      lg:justify-start lg:gap-8'>

      <Link href="/">
          <div className="">
            <a href="/">
                <img src="/assets/logo.png" className="
                h-20
                hidden 
                md:block md:h-12 md:mr-3
                lg:block lg:h-12 lg:mr-3
                "
                alt="TorrentFlix" />
            </a>
          </div>
      </Link>

        {/* <div className="flex items-center justify-center gap-x-2 whitespace-nowrap font-normal text-white hover:text-gray-300 hover:underline text-xl md:text-lg">
          <BsDiscFill color="white" size={20} className="cursor-pointer" />
          <Link href="/anime/random-anime">Movies</Link>
        </div>
        <div className="flex items-center justify-center gap-x-2 whitespace-nowrap font-normal text-white hover:text-gray-300 hover:underline text-xl md:text-lg">
          <BsFillCameraReelsFill color="white" size={20} className="cursor-pointer" />
          <Link href="/anime/recently-launched">Web Series</Link>
        </div>
        <div className="flex items-center justify-center gap-x-2 whitespace-nowrap font-normal text-white hover:text-gray-300 hover:underline text-xl md:text-lg">
          <BsTvFill color="white" size={20} className="cursor-pointer" />
          <Link href="/anime/popular-anime"> Anime </Link>
        </div> */}

      {/* <div onClick={logout}>
        <BsDiscFill />
      </div> */}

<button onClick={logout} className="">
      Log Out
</button>
      
      </nav>
    </>
  )
}

export default Navbar