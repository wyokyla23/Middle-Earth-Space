import React, { useContext } from 'react'
import { CharacterContext } from '../../contexts/CharacterContext'


export default function ProfileSection() {
  const [character] = useContext(CharacterContext)
  return (
    <div className="bg-white p-2 rounded-md shadow">
      <h1 className="ml-4 text-2xl p-3 font-medium tracking-wide">{character.name}</h1>
      <div className="flex gap-4">
        <div className=" rounded-full h-72 w-64 bg-blue-700 overflow-hidden m-4">
          <img src={character.profileImg} alt='Profile' className="object-cover h-full w-full" />
        </div>
        <div className="flex flex-col justify-center space-y-2 text-xl">
          {character.sections.profile.about.asl.map(
            (info) => (
              <p key={info}>{info}</p>
            ))}
          <p>Last Login: {character.sections.profile.about.lastLogin}</p>
        </div>
      </div>
    </div>
  )
}
