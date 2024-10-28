import { useEffect } from "react"
import Footer from "../components/Footer"
import Work from "../components/Work"

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo({top:0, left:0, behavior:'smooth'});
        document.title = "Muhammad Ali | Software Engineer"
    }, [])

    return (
        <>
            <Work/>
            <Footer/>
        </>
    )
}

export default Portfolio