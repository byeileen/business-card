import React from "react"
import portrait from "../images/picture.jpeg"

export default function Info(){
    return (
        <div className="infoClass">
            <nav>
                <img src={portrait} height="500px"></img>
                <h1>Amanda Bløndal</h1>
                <h3>Frontend Developer</h3>
                <button><i class="material-icons">email</i>Email</button>
            </nav>
        </div>
    )
}