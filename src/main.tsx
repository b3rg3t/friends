import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/Routes"
import "./App.css"
import { Header } from "./layout/header/Header"
import { Footer } from "./layout/footer/Footer"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Header />
        <main >
          <RouterProvider router={router} />
        </main>
        <Footer />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
