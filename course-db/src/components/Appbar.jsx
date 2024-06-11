import { Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appbar(){
    const navigate = useNavigate()
    const [userEmail, setuserEmail] = useState(null)

    useEffect(() => {
        function callback2(data){
            if(data.username){
                setuserEmail(data.username)
            }
            
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    if(userEmail){
        return <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "5px",
            background: '#b5b9bd'
        }}>
            <div>
                <Typography variant='h6'>ProDevs</Typography>
            </div>
    
            <div style={{display:'flex'}}>
                <div>
                    {userEmail}
                </div>
                <div style={{marginRight:"10px"}}>
                    <Button 
                        variant="contained"
                        onClick={() => {
                            localStorage.setItem("token",null)
                        }}
                    >Logout</Button> 
                </div>
            </div>
        </div>
    }   

    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "5px",
        background: '#b5b9bd'
    }}>
        <div>
            <Typography variant='h6'>ProDevs</Typography>
        </div>


        <div style={{display:'flex'}}>
            <div style={{marginRight:"10px"}}>
                <Button 
                    variant="contained"
                    onClick={() => {
                        navigate("/signup")
                        // window.location = "/signup"
                    }}
                >Sign Up</Button> 
            </div>

            <div>
                <Button 
                    variant="contained"
                    onClick={() => {
                        navigate("/login")
                        // window.location = "/login"
                    }}
                >Sign In</Button>
            </div>
        </div>
    </div>
}

export default Appbar