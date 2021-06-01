import React, { useContext } from 'react'
import { CharacterContext } from '../../contexts/CharacterContext'


export default function InterestsSection() {
  const [character] = useContext(CharacterContext)

  return (
    <div className="bg-white p-3 rounded-md shadow">
      <h4 className="ml-4 text-2xl p-3 font-medium tracking-wide">{character.name}'s Interests</h4>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-4">
          <span className="ml-4 text-xl">General:</span>
        </div>
        <div className="col-span-8 py-3">
          <span>{character.sections.interests}</span>
        </div>
      </div>
    </div>
  )
}
