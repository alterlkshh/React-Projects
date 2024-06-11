import React from "react"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, Tab, Typography, useThemeProps } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { atom, useRecoilState, useRecoilValue } from "recoil";

function Course(){
    let {courseId} = useParams()
    console.log("hii there from course")

    // const [courses, setCourses] = useState([])
    const setCourses = useSetRecoilState(coursesState)

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

    // let course = null
    // for(let i=0;i<courses.length;i++){
    //     if(courses[i].id == courseId){
    //         course = courses[i]
    //     }
    // }

    // if(!course){
    //     return <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20%",flexDirection:"column"}}>
    //         <CircularProgress />
    //     </div>
    // }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems:"center", flexDirection: "column"}}>
            <CourseCard courseId = {courseId} />
            <UpdateCard courseId = {courseId} /> 
        </div>
    )

}

function UpdateCard(props){
    console.log("hii there from updatecard")
    const [title,setTitle] = useState()
    const [description, setDescription] = useState()
    const [image,setImage] = useState("")
    const course = props.course
    // props.setCourses()
    const [courses,setCourses] = useRecoilState(coursesState)

    console.log("UpdateCard re-rendered")

    return <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
    }}>

            <Card variant = "outlined" style={{
                border: "2px solid black",
                width: "300px",
                height: "250px",
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '5px',
                padding:'40px'
            }}>
                <Typography  variant='h5'>Update Course Details</Typography>

                <br />

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
                    type='text' 
                    fullWidth = {true} />

                <br />

                <Button 
                    variant="contained"
                    onClick={() => {

                        const token = localStorage.getItem("token");
                        console.log("Token:", token);

                        function callback2(data){
                            let updatedCourses = []

                            for(let i=0;i<courses.length;i++){

                                if(courses[i].id == props.courseId){
                                    updatedCourses.push({
                                        id : props.courseId,
                                        title: title,
                                        description: description,
                                        imageLink: image
                                    })
                                } else {
                                    updatedCourses.push(courses[i])
                                }
                            }
                            setCourses(updatedCourses)
                        }

                        function callback1(res){
                            if(res.ok){
                                res.json().then(callback2)
                            } else {
                                console.error('Error:', res.status, res.statusText);
                            }
                        }
                        fetch("http://localhost:3000/admin/courses/" + props.courseId,{
                            method: "PUT",
                            body: JSON.stringify({
                                title: title,
                                description: description,
                                imageLink: image,
                                published: true
                            }),
                            headers: {
                                "Content-type": "application/json",
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        }).then(callback1)
                    }}
                >Update Course</Button>
            </Card>
    </div>
}


function CourseCard(props){
    // const course = props.course
    const courses = useRecoilValue(coursesState)
    let course = null;
    for(let i=0;i,courses.length; i++){
        if(courses[i].id == props.courseId) {
            course = courses[i]
        }
    }

    console.log("coursecard re-rendered")

    if(!course){
        return "loading ..."
    }

    return(
        <Card style={{
            margin: 10,
            width: 350,
            minHeight: 200,
            border: "2px solid black",
            padding: 0,
            marginBottom: "30px"
        }}>
            <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
            <Typography textAlign={"center"} variant="h6">{course.description}</Typography>
            <img src={course.imageLink} style={{width:350, height:200, border:"2px solid black"}}></img>
        </ Card>
    )
}

export default Course

const coursesState = atom({
    key: 'coursesState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});