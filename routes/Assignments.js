import { useState } from "react"
import "../styles/Assignment2.css"
import Sidebar from './Sidebar';

const Assignments = () => {

    const [vid, setVid] = useState(null)
    const handleChange = (event) => {
        setVid(URL.createObjectURL(event.target.files[0]))
    }


    const handleUpload = () => {

        if (vid) {
          alert('video submitted: ');
        } else {
          alert('No video to submit.');
        }
      };
    return (
        <>
              <Sidebar/>
            <div className="ass2">
                <div>
                    <h1>Assignment 1</h1>
                    <h3>Make a video of you painting a perfect stroke of the brush</h3>
                </div>
                <br></br>
                <br></br>
            <input type="file" onChange={handleChange}></input>
            <div className="assif" >
                <iframe src={vid}></iframe>
            </div>

            <div className="assbutton" onClick={handleUpload}><button >Submit</button> </div>
            </div>
        
        </>
    )
}

export default Assignments;


