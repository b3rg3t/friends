import { text } from "../../localization/sv"
import { FiUser } from "react-icons/fi"
import { BoxWrapper } from "../main/BoxWrapper"

export const AboutMe = () => {
  return (
    <BoxWrapper icon={<FiUser />} header={text.profile.aboutMe}>
      <></>
    </BoxWrapper>
  )
}
