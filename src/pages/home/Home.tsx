import { MainContent } from "../../components/main/MainContent"

export const Home = () => {
    console.log(import.meta.env.VITE_API_KEY, import.meta.env)
    return (
       <MainContent />
    )
}
