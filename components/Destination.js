import "../styles/DestinationStyles.css"
import DestinationData from "./DestinationData";
import imgpa1 from "../assets/popart1.jpg"
import imgpa2 from "../assets/popart2.jpg"
import imgpa3 from "../assets/simg1.jpeg"
import imgpa4 from "../assets/simg2.jpeg"
import imgpa5 from "../assets/o1.jpeg"
import imgpa6 from "../assets/o2.jpeg"




const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular ArtWorks</h1>
            <p>What Kind of Art is Most Popular?</p>
            <DestinationData
            className="first-des"
            heading="ART"
            text="Art is perhaps one of the most well-known and well-loved art styles throughout history and for good reason.
            It is, after all, a reimagination of sorts that “popped up” and took inspiration from mass or popular culture, particularly American consumerist culture, hence the name.
            This movement started in the mid-1950s and reached its height in the 1960s. This particular art style is characterized by the use of bold colours and the use of realistic or even hyper-realistic imagery. 
            Among the methods used by artists of this time included silk screening to produce works faster, akin to mass consumption."
            img1={imgpa1}
            img2={imgpa2}
            />
            <br></br>
            <br></br>
            <br></br>

            <DestinationData
            className="first-des-reverse"
            heading="SCULPTURE"
            text="sculpture, an artistic form in which hard or plastic materials are worked into three-dimensional art objects. The designs may be embodied in freestanding objects, in reliefs on surfaces, or in environments ranging from tableaux to contexts that envelop the spectator. An enormous variety of media may be used, including clay, wax, stone, metal, fabric, glass, wood, plaster, rubber, and random “found” objects. Materials may be carved, modeled, molded, cast and shaped and combined.
            Sculpture is not a fixed term that applies to a permanently circumscribed category of objects or sets of activities. It is, rather, the name of an art that grows and changes and is continually extending the range of its activities and evolving new kinds of objects. The scope of the term was much wider in the second half of the 20th century than it had been only two or three decades before, and in the fluid state of the visual arts in the 21st century nobody can predict what its future extensions are likely to be."
            img1={imgpa3}
            img2={imgpa4}
            />
            <br></br>
            <br></br>
            <br></br>

            <DestinationData
            className="first-des"
            heading="ORIGAMI"
            text="Making models from paper can require very few resources and take mere minutes (or even seconds) to execute. Complex designs, on the other hand, can take hours to complete. Some folders prefer almost cartoonlike renderings of their subjects, utilizing simple folding sequences, while others strive for highly accurate representations, requiring advanced techniques. The use of diagramming signs, symbols, and arrows allows for the folding sequences to be accurately described and thereby duplicated, 
            meaning this art form can be learned independent of language."
            img1={imgpa5}
            img2={imgpa6}
            />
            
        </div>
    );
};

export default Destination;