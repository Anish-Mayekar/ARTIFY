import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AssetsImg from "../assets/a3.jpg"
import Footer from "../components/Footer";
import MakeCourse from "../components/MakeCourse";

function CreateCourse(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="heromid"
        heroImg={AssetsImg}
        title=""
        btnClass="hide"
        />
        <MakeCourse/>
        <br></br>
        <br></br>
        <br></br>

        <Footer/>
        </>
    )
}

export default CreateCourse;