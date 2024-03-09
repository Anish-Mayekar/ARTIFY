import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AssetsImg from "../assets/h1.png"
import Footer from "../components/Footer";
import Course from "../components/Courses";

function Service(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="heromid"
        heroImg={AssetsImg}
        title="Service"
        btnClass="hide"
        />
        <Course/>
        <Footer/>
        </>
    )
}

export default Service;