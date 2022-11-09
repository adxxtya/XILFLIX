import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../../atoms/modalItem'
import MuiModal from '@mui/material/Modal'
import { CheckIcon, PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, XIcon } from '@heroicons/react/outline'
import { Element, Genre, Movie } from '../../typings'
import { DocumentData } from 'firebase/firestore'
import useAuth from '../../hooks/useAuth'
import ReactPlayer from 'react-player/lazy'
import { FaPlay } from 'react-icons/fa'

function Modal() {
  const [movie, setMovie] = useRecoilState(movieState)
  const [trailer, setTrailer] = useState('')
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [genres, setGenres] = useState<Genre[]>([])
  const [muted, setMuted] = useState(true)
  const [datas, setDatas] = useState()
  
  // console.log(movie?.media_type)
  
  console.log(movie?.id)
  

  useEffect(() => {
    if (!movie) return console.log("No Movies")

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${movie?.media_type === 'movie' ? 'movie' : 'tv'}/${movie?.id}?api_key=6e8cbf85f12cb9c69e8d2f39e1331936&language=en-US&append_to_response=videos`)
        .then((response) => response.json())
          if (data?.videos) {
            const index = data.videos.results.findIndex(
              (element: Element) => element.type === 'Trailer'
              )
              setTrailer(data.videos?.results[index]?.key)
              // console.log(data)
            }
            if (data?.genres) {
            setGenres(data.genres)
          }
        }
        
        fetchMovie()
      }, [movie])
      // console.log(datas)
      
// console.log(trailer)

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} onClose={handleClose} className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide">
      <>
        <button onClick={handleClose} className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#18181800] hover:bg-[#18181800]">
          <XIcon className='h-6 w-6 text-white bg-[#0000005e] rounded-2xl' />
        </button>

        <div className="relative pt-[56.25%]">
        <ReactPlayer 
           url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
           <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
           <div className="flex space-x-2">
            <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>
              {/* <button className="modalButton" onClick={handleList}>
                {addedToList ? (
                  <CheckIcon className="h-7 w-7" />
                ) : (
                  <PlusIcon className="h-7 w-7" />
                )}
              </button> */}
              <button className="modalButton text-white">
                <ThumbUpIcon className="h-6 w-6" />
              </button>
            </div>
            <button className="modalButton text-white" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="h-6 w-6 text-white" />
              ) : (
                <VolumeUpIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8 text-white">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie!.vote_average * 10}% Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row text-white">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres:</span>{' '}
                  {genres.map((genre) => genre.name).join(', ')}
                </div>

                <div>
                  <span className="text-[gray]">Original language:</span>{' '}
                  {movie?.original_language}
                </div>

                <div>
                  <span className="text-[gray]">Total votes:</span>{' '}
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  )
}

export default Modal
