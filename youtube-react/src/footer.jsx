import React from "react";
import { Nav } from "react-bootstrap";


export function Footer(){
   
    return(
       <div>
        <nav>
            <ul className="nav justify-content-center  ">
                <li className="nav-item">
                    <a href="#" className="nav-link custom-link">Fitness Dashboard</a>
                    </li>
                 <li className="nav-item">
                    <a href="#" className="nav-link custom-link">Watch videos</a>
                    </li>
                  <li className="nav-item"> 
                    <a href="#" className="nav-link custom-link">Privacy Policy</a>
                     </li>
                   <li className="nav-item">
                    <a href="#" className="nav-link custom-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link custom-link">Discord</a>
                        </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link custom-link">Tern & Conditions</a>
                        </li>              
            </ul>
        </nav>
        <p className="text-center">&copy;2024 Fitness Dashboard.All Rights Reserved.</p>
     
       </div>
    )
}

export function Greeting({name,age}){
    console.log({name})
    return(
        <>
        <h1>Hi! my name is{name}</h1>
        <p>and your age is {age}</p>
        </>
    )
}