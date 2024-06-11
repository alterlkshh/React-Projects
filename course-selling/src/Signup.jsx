import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography, useScrollTrigger } from '@mui/material';

function Signup(){
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    return <div>
            <div style={{
                paddingTop: 15,
                marginBottom: 15,
                marginTop: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Typography variant='h4'>Welcome to ProDevs</Typography>
                <br/>
                <Typography variant='h6'>Sign Up below</Typography>
            </div>

        <center>
            <Card variant = "outlined" style={{
                border: "2px solid black",
                width: "350px",
                height: "250px",
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '5px',
                padding:'30px'
            }}>
                
                <TextField 
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    // id={"Username"} 
                    label="Email/Username" 
                    variant="outlined" 
                    type='text' 
                    fullWidth = {true} 
                />

                <br/>

                <TextField 
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    // id={"Password"} 
                    label="Password" 
                    variant="outlined" 
                    type='password' 
                    fullWidth = {true} />
                <br/> 
                <Button 
                    variant="contained"
                    onClick={() => {

                        function callback2(data){
                            localStorage.setItem("token", data.token);
                            window.location = '/'
                        }

                        function callback1(res){
                            res.json().then(callback2)
                        }
                        // let username = document.getElementById("Username").value;
                        // let password = document.getElementById("Password").value;
                        fetch("http://localhost:3000/admin/signup",{
                            method: "POST",
                            body: JSON.stringify({
                                username: email,
                                password: password
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then(callback1)
                    }}
                >Sign Up</Button>
            </Card>
        </center>
    </div>
}

export default Signup; 