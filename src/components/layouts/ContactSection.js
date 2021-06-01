import React, { useContext } from 'react'
import { CharacterContext } from '../../contexts/CharacterContext'
import { FaMailBulk, FaUserFriends, FaUserTimes, FaBeer } from 'react-icons/fa'
import { MdMessage, MdGroupAdd, MdFavoriteBorder } from 'react-icons/md'
import { CgMailForward } from 'react-icons/cg'
import { BsArrowUpDown } from 'react-icons/bs'


export default function ContactSection() {
  const [character] = useContext(CharacterContext)
  return (
    <div className="bg-white p-3 rounded-md shadow">
      <h4 className="ml-4 text-2xl p-3 font-medium tracking-wide">Contacting {character.name}</h4>
      <div className="grid grid-cols-2 text-center py-3 px-3 md:px-8">
        <div className="space-y-3 font-bold text-gray-700">
          {/* <SiGooglemessages /> */}
          <a href="mailto: wyokyla23@gmail.com" className="flex items-center space-x-2 font-bold">
            <FaMailBulk />
            <p>Send Message</p>
          </a>
          <button className="flex items-center space-x-2 font-bold">
            <FaUserFriends />
            <p>Add to Friends</p>
          </button>
          <button className="flex items-center space-x-2 font-bold">
            <MdMessage />
            <p>Instant Message</p>
          </button>
          <button className="flex items-center space-x-2 font-bold">
            <MdGroupAdd />
            <p>Add to Group</p>
          </button>
        </div>
        <div className="space-y-3 text-gray-700">
          <button className="flex items-center space-x-2 font-bold">
            <CgMailForward />
            <p>Forward to Friend</p>
          </button>
          <button className="flex items-center space-x-2 font-bold">
            <MdFavoriteBorder />
            <p>Add to Favorites</p>
          </button>
          <button className="flex items-center space-x-2 font-bold">
            <FaUserTimes />
            <p>Block User</p>
          </button>
          <button className="flex items-center space-x-2 font-bold">
            <BsArrowUpDown />
            <p>Rank User</p>
          </button>
        </div>
      </div>
    </div>
  )
}
