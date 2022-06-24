import React from "react";
import '../Authorization/index.css'
import Reception from '../assets/images/logInImg.jpg'
import Logo from "../assets/images/hostelLogo.png"
import LogIn from "./logIn";

const AuthPage = () => {

    return (
        <div className="logIn" style={{display: "flex"}}>                                            
            <img src={Reception} alt="reception" width="50%" height="100%" />
            <div style={{background:"white", height:"100%", width:"50%"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={Logo} alt="logo" width="25%"  />
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{fontWeight:700, fontSize:"30px"}}>SVH Mens Hostel, Taramani, Chennai.</div>
                </div>
                <div style={{display:"flex", marginTop:"10px"}}>
                    <LogIn />
                </div>
            </div>
        </div>
    )
}

export default AuthPage