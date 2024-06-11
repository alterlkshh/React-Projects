import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography, useScrollTrigger } from '@mui/material';
import axios from 'axios'

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
                    label="Password" 
                    variant="outlined" 
                    type='password' 
                    fullWidth = {true} />
                <br/> 
                <Button 
                    variant="contained"
                    onClick={async() => {
                        const res = await axios.post("http://localhost:3000/admin/signup",{
                            username: email,
                            password: password
                        });
                        const data = res.data;

                        localStorage.setItem("token", data.token);
                        window.location = '/'
                    }}
                >Sign Up</Button>
            </Card>
        </center>
    </div>
}

export default Signup; 