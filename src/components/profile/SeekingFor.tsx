import { text } from "../../localization/sv"
import { RiSearchEyeLine } from "react-icons/ri"
import { BoxWrapper } from "../main/BoxWrapper"

export const SeekingFor = () => {
  return (
    <BoxWrapper icon={<RiSearchEyeLine />} header={text.profile.seekingFor}>
      <></>
    </BoxWrapper>
  )
}
