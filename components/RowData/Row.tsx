import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../../atoms/modalItem'

function Row(props: any) {

  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)
  const [movie, setMovie] = useState(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  // console.log(Object.values(props.data))
  // console.log(props.data)
  
  
  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }


  return (
    <main className='group relative ml-2'>
       <div className="text-2xl mt-6 mb-2 ml-6">{props.title}</div>
      <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
      <div ref={rowRef} className=" flex object-cover overflow-x-scroll scrollbar-hide">
        {Object.values(props.data).map((prop: any, key: any, title: any) => {
          // console.log(prop)
          return (
            <div
            key={key}
            className="relative flex items-center
            min-w-[180px] md:min-w-[230px] lg:min-w-[250px] 
            cursor-pointer transition ease-in-out duration-500  
            hover:scale-[1.02] m-2 ">
              <div className="group flex flex-col justify-center items-center 
                              absolute rounded-lg text-center
                              min-w-[180px] md:min-w-[230px] lg:min-w-[250px] 
                              h-[101px] md:h-[129px] lg:h-[141px] 
                              hover:bg-[#000000c3] 
                              transition-opacity ease-in-out duration-500 opacity-0 : hover:opacity-100 z-10"
                              onClick={() => {
                                setCurrentMovie(prop)
                                setShowModal(true)
                              }}
                              >
                  <div className='absolute top-1 leading-4 w-[170px] md:w-[220px] lg:w-[240px] 
                                  text-xs md:text-xl lg:text-xl 
                                  '>
                    {prop.title || prop.original_title || prop.name}
                  </div>
                <div className="hidden group-hover:block ">
                  <img
                    src="/assets/play-button.svg"
                    width={40}
                    alt=""
                    className=""
                    />
                </div>
              <div className='text-xs md:text-base lg:text-lg
                              absolute bottom-2'>
                Rating: {prop.vote_average}/10   
              </div>
              </div>
              <div className="" >
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    prop.backdrop_path 
                  }`}
                  className="rounded-lg"
                  />
              </div>
            </div>
          )
        })}
      <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </main>
  )
}

export default Row
