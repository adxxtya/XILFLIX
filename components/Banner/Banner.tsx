import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { modalState, movieState } from '../../atoms/modalItem'
import { useRecoilState } from 'recoil'


interface Movie {
  randomSeries: Movie[]
}

function Banner(props: any) {
  
  const [movie, setMovie] = useState<Movie | null>(null)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'
  const [randomBanner, setRandomBanner] = useState<Movie | any>(null)

  useEffect(() => {
    setRandomBanner(props.randomSeries[Math.floor(Math.random() * 20)])
  }, [props.randomSeries])

  // console.log(movie)
  // console.log(randomBanner)
  // console.log(randomBanner.id)

  return (
<div className='relative'>


    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[85vh] lg:justify-end lg:pb-12">
    <div className="absolute top-0 left-0 h-[90vh] w-screen">
      <Image
        layout="fill"
        src={`${imageBaseUrl}${randomBanner?.backdrop_path || randomBanner?.poster_path}`}
        objectFit="cover"
      />
    </div>

    <h1 className="pl-4 pb-2 lg:pl-16 z-10 text-shadow-lg text-2xl font-bold md:text-4xl lg:text-7xl">
      {randomBanner?.title || randomBanner?.name || randomBanner?.original_name}
    </h1>
    <p className="pl-4 lg:pl-16 pb-8 z-10 max-w-xs text-shadow-lg text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
      {randomBanner?.overview}
    </p>
    <div className="pl-4 lg:pl-16 flex space-x-3 z-10">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(randomBanner)
            setShowModal(true)
            
          }}
        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
           More Info
        </button>
      </div>
  </div>


  </div>
  )
}

export default Banner
