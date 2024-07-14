import { IoFootball, IoTennisball } from "react-icons/io5"
import { TInterests } from "../models/types/TInterests"
import { text } from "../localization/sv"
import { FaBasketball, FaBowlingBall } from "react-icons/fa6"

const { football, basketball, tennis, bowling } = text.interests

export const interests: TInterests[] = [
  {
    id: 1,
    label: football,
    icon: <IoFootball />,
  },
  {
    id: 2,
    label: basketball,
    icon: <FaBasketball />,
  },
  {
    id: 3,
    label: tennis,
    icon: <IoTennisball />,
  },
  {
    id: 4,
    label: bowling,
    icon:<FaBowlingBall />,
  },
]
