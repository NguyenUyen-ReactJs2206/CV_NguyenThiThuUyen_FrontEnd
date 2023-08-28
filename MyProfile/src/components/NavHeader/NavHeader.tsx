import React from 'react'
import Li from '../Li'

export default function NavHeader() {
  return (
    <div className='lg:block hidden bg-blue fixed w-full z-20'>
      <div className='animation-bottom__navbar bg-white py-4'>
        <ul className='flex justify-end mr-10 flex-shrink-0'>
          <Li scrollTo='home' title='Home' className='px-4 py-2 uppercase text-sm ' />
          <Li scrollTo='about' title='About' className='px-4 py-2 uppercase text-sm ' />
          <Li scrollTo='skill' title='Skill' className='px-4 py-2 uppercase text-sm ' />
          <Li scrollTo='ability-to-work' title='Ability to work' className='px-4 py-2 uppercase text-sm ' />
          <Li scrollTo='project' title='My project' className='px-4 py-2 uppercase text-sm ' />
          <Li scrollTo='contact' title='Contact' className='px-4 py-2 uppercase text-sm ' />
        </ul>
      </div>
    </div>
  )
}
