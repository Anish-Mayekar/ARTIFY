
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AssetsImg from "../assets/a3.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";


function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="heromid"
        heroImg={AssetsImg}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;