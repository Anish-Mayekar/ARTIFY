import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AssetsImg from "../assets/dd1.jpeg"
import Footer from "../components/Footer";
import Home2 from "../components/Home2";

function Home22(){
    return(
        <>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>

        <Hero
        cName="heromid"
        heroImg={AssetsImg}
        title="Register Now!!"
        btnClass="hide"
        />
        <Home2/>

        <Footer/>
        </>
    )
}

export default Home22;