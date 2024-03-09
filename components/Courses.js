import "../styles/CoursesStyles.css"
import CourseData from "./CoursesData";
import c1 from "../assets/popart1.jpg"
import c2 from "../assets/simg1.jpeg"
import c3 from "../assets/o1.jpeg"

function Course(){
    return(
        <div className="courses">
            <h1>Our Courses</h1>
            <p>You can discover your unique passion by apply to right Artwork course</p>
            <div className="CourseCard">
                <CourseData
                image={c1}
                heading= "PAINTING"
                text= "painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language—its shapes, lines, colours, tones, and textures—are used in various ways to produce sensations of volume, space, movement, and light on a flat surface."
                url="/Cards"
                />

                <CourseData
                image={c2}
                heading= "ORIGAMI"
                text= "painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language—its shapes, lines, colours, tones, and textures—are used in various ways to produce sensations of volume, space, movement, and light on a flat surface."
                url="/Cards"
                />

                <CourseData
                image={c3}
                heading= "SCULPTURE"
                text= "painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language—its shapes, lines, colours, tones, and textures—are used in various ways to produce sensations of volume, space, movement, and light on a flat surface."
                url="/Cards"
                />

                <CourseData
                image={c1}
                heading= "POTTERY"
                text= "painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language—its shapes, lines, colours, tones, and textures—are used in various ways to produce sensations of volume, space, movement, and light on a flat surface."
                url="/Cards"
                />
            </div>
        </div>
    )
}

export default Course;
