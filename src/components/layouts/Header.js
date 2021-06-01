import React, { useContext } from 'react'
import { CharacterContext } from '../../contexts/CharacterContext'
import characters from '../../data/characters'


export default function Header() {

  return (
    <div className="w-full">
      <HeaderBanner />
      <div className="bg-gray-800 text-white px-8 py-4">
        <div className="flex-col flex md:flex-row md:items-center justify-center md:space-x-16 w-full h-full text-2xl space-y-4 md:space-y-0 md:text-lg">

          <a href="https://kyla-gregory.netlify.app/">Home</a>
          <a href="#">Invite</a>
          <a href="#">Film</a>
          <a href="#">Forum</a>
          <a href="#">Groups</a>
          <a href="#">Music</a>
        </div>
      </div>
    </div>
  )
}

const HeaderBanner = () => {
  const [character] = useContext(CharacterContext)
  const characterBannerImg = character.bannerImg
  return (
    <div className="w-full h-44 bg-gray-700">
      <img src={characterBannerImg} alt='Banner' className="object-cover h-full w-full" />
    </div>

  )
}
