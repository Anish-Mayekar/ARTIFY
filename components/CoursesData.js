import "../styles/CoursesStyles.css"
import {Link} from 'react-router-dom'

function CourseData(props) {
    return(
        <div className="t-card">
           <div className="t-image">
            <img src={props.image} alt="img"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p> 
            <Link to={props.url}>View</Link>
        </div>
    )

}

export default CourseData;