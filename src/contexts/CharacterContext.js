import { useState, createContext } from 'react'
import characters from '../data/characters'

export const CharacterContext = createContext([null, () => { }])

const CharacterContextProvider = ({ children }) => {
  const state = useState(characters['frodo'])

  return (
    <CharacterContext.Provider value={state}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterContextProvider