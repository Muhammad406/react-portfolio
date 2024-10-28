import { useEffect } from "react"
import Header from "../components/Header"
import Window from "../components/Window"
import Footer from "../components/Footer"
import Work from "../components/Work"

const Home = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Muhammad Ali | Software Engineer"
  }, [])

  return (
    <div>
      <Header/>
      <div className="divider divider-minus-body"/>
      <Window/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home