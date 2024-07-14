import { text } from "../../localization/sv"
import { BoxWrapper } from "../main/BoxWrapper"
import { PiArrowFatRight } from "react-icons/pi"

export const AboutMeShort = () => {
  return (
    <BoxWrapper icon={<PiArrowFatRight />} header={text.profile.aboutMeShort}>
      <ul className="list-unstyled">
        <li></li>
      </ul>
    </BoxWrapper>
  )
}
