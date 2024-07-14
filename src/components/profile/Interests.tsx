import { FiUser } from "react-icons/fi"
import { text } from "../../localization/sv"
import { BoxWrapper } from "../main/BoxWrapper"
import { interests } from "../../data/interests"

export const Interests = () => {
  return (
    <BoxWrapper icon={<FiUser />} header={text.profile.interests}>
      <ul className="list-unstyled d-flex gap-1 flex-wrap">
        {interests.map(interest => (
          <li key={interest.id} className="d-flex badge text-bg-info text-white rounded-pill" >
            <span className="d-flex align-items-center me-1">{interest.icon}</span>
            {interest.label}
          </li>
        ))}
      </ul>
    </BoxWrapper>
  )
}
