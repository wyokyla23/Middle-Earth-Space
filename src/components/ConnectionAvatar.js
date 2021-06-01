import React, { useContext } from 'react'
import propTypes from 'prop-types'
import characters from '../data/characters'
import { CharacterContext } from '../contexts/CharacterContext'


const PropTypes = {
  name: propTypes.string.isRequired,
}

export default function ConnectionAvatar({ name }) {
  const [_, setCharacter] = useContext(CharacterContext)
  const profileImg = characters[name].profileImg
  const characterName = characters[name].name

  return (
    <div onClick={() => setCharacter(characters[name])} className="cursor-pointer">
      <h5 className="text-center p-1 text-lg font-semibold">{characterName}</h5>
      <div className="h-52 bg-blue-200" >
        <img src={profileImg} alt='Profile' className="object-cover h-full w-full" />
      </div>
    </div>
  )
}

ConnectionAvatar.propTypes = PropTypes

