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
            {courses.map(course => {
                return <Course course={course}></Course>
            })}
        </div>
        
    )
}

function Course(props){
    return(
        <Card style={{
            width: 350,
            Height: 300,
            border: "2px solid black",
            padding: 0,
            backgroundColor:'black',
            margin: '10px'
        }}>
            <img src={props.course.imageLink} style={{width:350, height:200, border:"2px solid black"}}></img>
            <Typography color={"white"} textAlign={"center"} variant="h5">{props.course.title}</Typography>
            <Typography color={"#B2BECD"} textAlign={"center"} fontSize={'15px'} variant="h6">{props.course.description}</Typography>
        </ Card>
    )
}

export default Courses

