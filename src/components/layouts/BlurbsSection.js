import React, { useContext } from 'react'
import { CharacterContext } from '../../contexts/CharacterContext'

export default function BlurbsSection() {
  const [character] = useContext(CharacterContext)
  return (
    <div className="bg-white p-3 rounded-md shadow">
      <h4 className=" text-2xl p-3 font-medium tracking-wide">{character.name}'s Blurbs</h4>
      <div className="space-y-3">
        <p className="text-xl py-3">About me:</p>
        {character.sections.blurbs.map(
          (blurb) => (
            <p key={blurb}>{blurb}</p>
          ))}
      </div>
    </div>
  )
}
