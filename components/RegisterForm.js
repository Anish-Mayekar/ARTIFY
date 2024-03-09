// import "../styles/RegisterFormStyles.css"

// function RegisterForm(){
//     return(
//         <div className="from-container">
//             <h1>Register Now !!</h1>
//             <form>
//                 <input type="text" placeholder="Name"/>
//                 <select id="Art" name="Art">
//                 <option value="" selected disabled>Select Art field</option>
//                 <option value="Painting">Painting</option>
//                 <option value="Origami">Origami</option>
//                 <option value="Sculpture">Sculpture</option>
//                 <option value="Pottery">Pottery</option>
//                 </select>
//                 <input type="email" placeholder="Email"/>
//                 <input type="password" placeholder="Password"/>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default RegisterForm

import "../styles/RegisterFormStyles.css"
import React, { useState } from "react";
//import {Navbar} from "Navbar";
const RegisterForm  = () =>{
    //const Contact = () => {
        const [userData, setUserData] = useState({
          name: "",
          Art: "",
          email: "",
          password: "",

        });
      
        let name, value;
        const postUserData = (event) => {
          name = event.target.name;
          value = event.target.value;
      
          setUserData({ ...userData, [name]: value });
        };
      
        // connect with firebase
        const submitData = async (event) => {
          event.preventDefault();
          const { name, Art,  email, password } = userData;
      
          if (name && Art &&  email && password) {
            const res = fetch(
              "https://artify-22d2a-default-rtdb.firebaseio.com/users.json",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    Art,
                    email,
                    password,

                }),
              }
            );
      
            if (res) {
              setUserData({
                name: "",
                Art: "",
    
                email: "",
                password: "",
              });
              //{name && <Navbar name={name} />}
              alert("Data Stored");
            } else {
              alert("Please fill the fields properly");
            }
          } else {
            alert("Please fill the fields properly");
          }
        };
    return(
        <div className="from-container">
            <h1>Register Now !!</h1>
            <form method="POST">
                <input type="text" placeholder="Name" name="name" className="form-control"  value={userData.firstName} onChange={postUserData}/>
                <select id="Art" name="Art"  value={userData.firstName} className="form-control"  onChange={postUserData}>
                <option value="" selected disabled>Select Art field</option>
                <option value="Painting">Painting</option>
                <option value="Origami">Origami</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Pottery">Pottery</option>
                </select>
                <input type="email" placeholder="Email" name="email" className="form-control"  value={userData.firstName} onChange={postUserData}/>
                <input type="password" placeholder="Password" name="password" className="form-control"  value={userData.firstName} onChange={postUserData}/>
                <button type="submit" onClick={submitData}>Submit</button>
            </form>
            
        </div>
    )
}

export default RegisterForm;