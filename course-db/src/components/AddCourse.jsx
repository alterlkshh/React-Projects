import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography, useScrollTrigger } from '@mui/material';
import axios from 'axios';

function AddCourse(){
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image,setImage] = useState("");
    const [price, setPrice] = useState();

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
                <Typography variant='h6'>Add Courses here </Typography>
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
                        setTitle(e.target.value)
                    }}
                    label="Title" 
                    variant="outlined" 
                    type='text' 
                    fullWidth = {true} 
                />

                <br/>

                <TextField 
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    label="Description" 
                    variant="outlined" 
                    type='text' 
                    fullWidth = {true} />
                <br/> 

                <TextField 
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                    label="Image-Link" 
                    variant="outlined" 
                    fullWidth = {true} />

                <br />

                <TextField 
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    label="Price" 
                    variant="outlined" 
                    fullWidth = {true} />

                <br />

                <Button 
                    variant="contained"
                    onClick={async() => {
                        await axios.post("http://localhost:3000/admin/courses",{
                            title: title,
                            description: description,
                            imageLink: image,
                            published: true,
                            price: price
                        }, {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        alert('course added');
                    }}
                >Add Course</Button>
            </Card>
        </center>
    </div>
}

export default AddCourse; 