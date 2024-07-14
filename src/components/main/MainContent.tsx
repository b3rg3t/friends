import React from 'react'
import { AboutMe } from '../profile/AboutMe'
import { SeekingFor } from '../profile/SeekingFor'
import { Interests } from '../profile/Interests'

export const MainContent = () => {
    return (
        <div className='d-flex flex-column gap-2 p-1'>
          <AboutMe />
          <SeekingFor />
          <Interests />
        </div>
    )
}
