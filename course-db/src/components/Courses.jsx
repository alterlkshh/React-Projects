import { Card, Tab, Typography, useThemeProps } from "@mui/material";
import React, { useState,useEffect } from "react";


function Courses(){

    const [courses, setCourses] = useState([])

    useEffect(() => {
        function callback2(data){
            setCourses(data.courses)
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    },[])


    return (

        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            <Course course = {course} />
            {courses.map(course => {
                return <Course course={course} />
            })}
        </div>
        
    )
}

export function Course({course}){
    const navigate = useNavigate();

    return(
        <Card style={{
            width: 350,
            Height: 300,
            border: "2px solid black",
            padding: 0,
            backgroundColor:'black',
            margin: '10px'
        }}>
            <img src={course.imageLink} style={{width:350, height:200, border:"2px solid black"}}></img>
            <Typography color={"white"} textAlign={"center"} variant="h5">{course.title}</Typography>
            <Typography color={"#B2BECD"} textAlign={"center"} fontSize={'15px'} variant="h6">{course.description}</Typography>
            <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
                <Button variant='contained' onClick={() => {
                    navigate("/course/" + course._id);
                }}>Edit</Button>
            </div>
        </ Card>
    )
}

export default Courses

