import "../styles/DestinationStyles.css"
import DestinationData from "../components/DestinationData";
import imgpa1 from "../assets/p1.jpg"
import imgpa2 from "../assets/p2.jpg"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import DescData from "../components/DescData"


const Descriptions = () =>{
    return(
        <>
        <div className="navbar-des">
        <Navbar/>
        </div> 
        <div className="destination">
            <DestinationData
            className="first-des"
            heading="How to Paint From Beginner to Master -Acrylic Painting"
            text1="Art is perhaps one of the most well-known and well-loved art styles throughout history and for good reason.
            It is, after all, a reimagination of sorts that “popped up” and took inspiration from mass or popular culture, particularly American consumerist culture, hence the name.
            This movement started in the mid-1950s and reached its height in the 1960s. This particular art style is characterized by the use of bold colours and the use of realistic or even hyper-realistic imagery. 
            Among the methods used by artists of this time included silk screening to produce works faster, akin to mass consumption."
            img1={imgpa1}
            img2={imgpa2}
            />
        </div>
        <DescData/>
        <Footer/>
        </>
    );
};

export default Descriptions;