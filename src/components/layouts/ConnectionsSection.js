import React, { useState, useContext } from 'react'
import { CharacterContext } from '../../contexts/CharacterContext'
import ConnectionAvatar from '../ConnectionAvatar'

export default function ConnectionsSection() {
  const [connectionType, setConnectionType] = useState('Friends')
  const [oppositeFriends, setOppositeFriends] = useState('Enemies')
  const [character] = useContext(CharacterContext)

  const handleClick = () => {
    if (connectionType === 'Friends') {
      setConnectionType('Enemies')
      setOppositeFriends('Friends')
    } else if (connectionType === 'Enemies') {
      setConnectionType('Friends')
      setOppositeFriends('Enemies')
    }
  }

  return (
    <div className="bg-white pb-7 p-3 rounded-md shadow">
      <h3 className="text-2xl px-3 py-4 font-medium tracking-wide">{character.name}'s {connectionType} Space</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
        {connectionType === 'Friends' ? (
          character.sections.friends.map(
            (friend) => (
              <ConnectionAvatar key={friend} name={friend} />
            )
          )
        ) : (
          character.sections.enemies.map(
            (enemy) => (
              <ConnectionAvatar key={enemy} name={enemy} />
            )
          )
        )}
      </div>
      <button onClick={handleClick} type="button" className="inline-flex items-center px-4 py-5  border-transparent text-xl font-medium rounded-md text-indigo-700 focus:outline-none">View {character.name}'s {oppositeFriends}</button>
    </div>
  )
}
