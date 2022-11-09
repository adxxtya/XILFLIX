import React from 'react'
import AnimeBanner from '../../components/AnimePage/AnimeBanner'


function index(props: any) {
  return (
    <div>
      <AnimeBanner randomAnime={props.randomAnime.data}/>
    </div>
  )
}

export default index

export async function getServerSideProps() {
  const resRandom = await fetch(`https://api.jikan.moe/v4/random/anime`)
  const randomAnime = await resRandom.json()

  return {
    props: {
      randomAnime: randomAnime || null,
    }
  }
}