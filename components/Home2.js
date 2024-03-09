import '../styles/NavbarStyles.css';
import '../styles/Home2.css';
import {Component} from "react";
// import {Link} from "react-router-dom";
import { MenuItems2 } from './MenuItems2';
import { Link } from 'react-router-dom';

class Home2 extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <div>
                <div className="menu-icons" onClick= {this.handleClick} >
                    <i className= {this.state.clicked ? "fa fa-times" : "fa-solid fa-bars"}></i>
                </div>
                        {MenuItems2.map((item,index) => {
                            return(
                            <li key={index} className='Home2'>
                                <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                                </Link>
                                <br></br>
                            </li>
                            )
                        })}            </div>
        )
    }
}

export default Home2