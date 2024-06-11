import React from "react"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, Tab, Typography, useThemeProps } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { atom, useRecoilState, useRecoilValue } from "recoil";
import axios from 'axios'

function Course(){
    let {courseId} = useParams()
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/admin/course/" + courseId, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setCourse(res.data.course);
        });
    },[]);

    if(!course){
        return <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20%",flexDirection:"column"}}>
            <CircularProgress />
        </div>
    }

    return <div>
        <GrayTopper title={course.title} />
        <Grid container>
            <Grid item lg={8} md={12} sm={12}>
                <UpdateCard course={course} setCourse={setCourse} />
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <CourseCard course={course} />
            </Grid>
        </Grid>
    </div>

}

function GrayTopper({title}) {
    return <div style={{height: 250, background: "#212121", top:0, width: "100vw", zIndex:0, marginBottom: -250}}>
        <div style={{height: 250, display:'flex', justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography style={{color: "white", fontWeight:600}} variant="h3" textAlign={'center'}>
                    {title}
                </Typography>
            </div>
        </div>
    </div>
}

function UpdateCard({course, setCourse}){
    const [title,setTitle] = useState(course.title)
    const [description, setDescription] = useState(course.description)
    const [image,setImage] = useState(course.imageLink)
    const [price, setPrice] = useState(course.price)

    return <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
                }}>
            
                <Card variant = "outlined" style={{ maxWidth: 600, marginTop: 200 }}>
                    <div style={{padding: 20}}>
                        <Typography  variant='h5'>Update Course Details</Typography>
                        <TextField 
                            value = {title}
                            style={{marginBottom: 10}}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            label="Title" 
                            variant="outlined" 
                            fullWidth = {true} 
                        />

                        <TextField 
                            value = {description}
                            style={{marginBottom: 10}}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            label="Description" 
                            variant="outlined" 
                            type='text' 
                            fullWidth = {true} />

                        <TextField 
                            value = {image}
                            style={{marginBottom: 10}}
                            onChange={(e) => {
                                setImage(e.target.value)
                            }}
                            label="Image-Link" 
                            variant="outlined" 
                            fullWidth = {true} />

                        <TextField 
                            value = {price}
                            style={{marginBottom: 10}}
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                            label="Price" 
                            variant="outlined" 
                            fullWidth = {true} />

                        <Button 
                            variant="contained"
                            onClick={async() => {
                                axios.put("http://localhost:3000/admin/courses/" + props.courseId,{

                                        title: title,
                                        description: description,
                                        imageLink: image,
                                        published: true,
                                        price
                                }, {
                                    headers: {
                                        "Content-type": "application/json",
                                        "Authorization": "Bearer " + localStorage.getItem("token")
                                    }
                                });
                                let updatedCourse = {
                                    _id: course._id,
                                    title: title,
                                    description: description,
                                    imageLink: image,
                                    price
                                };
                                setCourse(updatedCourse);
                            }}
                        >Update Course</Button>
                    </div>
                </Card>
            </div>
}


function CourseCard(props){
    const course = props.course
    return(
        <div style={{display:"flex", marginTop: 50, justifyContent: "center", width}}> 
            <Card style={{
                margin: 10,
                width: 350,
                minHeight: 200,
                borderRadius: 20,
                marginRight: 50,
                paddingBottom: 15,
                zIndex: 2
            }}>
                <img src={course.imageLink} style={{width:350}}></img>
                <div style={{marginLeft: 10}}>
                    <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
                    <Typography variant="subtitle2" style={{color:'gray'}}>
                        Price
                    </Typography>
                    <Typography variant="subtitle1">
                        <b>Rs {course.price} </b>
                    </Typography>
                </div>
            </ Card>
        </div>
    )
}

export default Course
