import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AssetsImg from "../assets/a1.jpg"
import Destination from "../components/Destination";
import Course from "../components/Courses";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={AssetsImg}
        title="Your Journey to become Artist starts here"
        text="Choose your Art type"
        buttonText="Plan"
        url="/"
        btnClass="show"
        />
        <br></br>
        <Destination/>
        <Course/>
        <Footer/>
        
        </>
    );
}

export default Home;