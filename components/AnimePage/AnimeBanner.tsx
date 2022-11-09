import React from 'react'

function Banner(props: any) {
    console.log(props)

  return (
    <main>
      <div className="flex justify-around items-center h-[70vh] bg-amber-400 m-4">
        <div className='bg-green-400 m-4'>
          <img
            className="object-cover h-[60vh]"
            src={
              props.randomAnime.images.jpg.large_image_url ||
              props.randomAnime.images.webp.large_image_url ||
              props.randomAnime.images.jpg.image_url
            }
            alt=""
            />
        </div>
        <div className='bg-blue-300'>
          Anime Desc
        </div>
      </div>
    </main>
  )
}

export default Banner
