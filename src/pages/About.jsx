import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Window from "../components/Window"

const About = () => {

    useEffect(() => {
        window.scrollTo({top:700, left:0, behavior:'smooth'});
        document.title = "Muhammad Ali | Software Engineer"
    }, [])

    return (
        <>
        <Header/>
        <div className="divider divider-minus-body"/>
        <Window/>
        <Footer/>
        </>
    )
}

export default About