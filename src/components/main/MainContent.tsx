import { AboutMe } from '../profile/AboutMe'
import { SeekingFor } from '../profile/SeekingFor'
import { Interests } from '../profile/Interests'
import { ProfilePic } from '../profile/ProfilePic'
import { AboutMeShort } from '../profile/AboutMeShort'

export const MainContent = () => {
    return (
        <div className='d-flex flex-column gap-2 p-1'>
          <ProfilePic />
          <AboutMe />
          <SeekingFor />
          <Interests />
          <AboutMeShort />
        </div>
    )
}
