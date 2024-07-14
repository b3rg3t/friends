import { contentClassNames } from "../profile/helpers"

interface IBoxWrapper {
  icon: React.ReactElement
  header: string
  children: React.ReactElement
}

export const BoxWrapper = ({ icon, header, children }: IBoxWrapper) => {
  return (
    <section className={contentClassNames}>
      <h2 className="d-flex mb-1">
        <span className="d-flex align-items-center me-1">{icon}</span>
        {header}
      </h2>
      {children}
    </section>
  )
}
