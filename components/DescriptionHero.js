import { Component } from "react";
import "../styles/Description.css"

class DescriptionHero extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text1}</p>

            </div>
            <div className="image">
                <img alt="img" src={this.props.img1}/>
                <img alt="img" src={this.props.img2}/>
            </div>
        </div>
        )
    }
}

export default DescriptionHero;