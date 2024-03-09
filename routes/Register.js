import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AssetsImg from "../assets/a3.jpg"
import Footer from "../components/Footer";
import RegisterForms from "../components/RegisterForms";

function Register(){
    return(
        <>
        <Navbar/>

        <Hero
        cName="heromid"
        heroImg={AssetsImg}
        title="Register Now!!"
        btnClass="hide"
        />
        
        <br></br>
        <br></br>
        <br></br>
        <RegisterForms/>
        <br></br>
        <br></br>
        <br></br>

        <Footer/>
        </>
    )
}

export default Register;