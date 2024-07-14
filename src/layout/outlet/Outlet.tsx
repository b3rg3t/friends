import { Outlet } from "react-router-dom"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"

export const loader = async ({ params }: any) => {
  return params
}

export const Root = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
)
