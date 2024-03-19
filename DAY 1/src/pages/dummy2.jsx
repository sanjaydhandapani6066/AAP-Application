import React, { useState } from "react";
import beginner from '../assets/Images/beginner.png';
import intermediate from '../assets/Images/intermediate.png';
import pro from '../assets/Images/pro.png';
import "../assets/css/Courses.css";
import Navbar from "./others/Navbar";
import ViewCourse from "./ViewCourse";
import { useNavigate } from "react-router-dom";

const Dummy2 = ()=>{
    const coursesData = {
        "courses": [
          {
            "title": "Begginer Course",
            "image": beginner,
            "description": "New to Chess? This course will be best suited for you. Everything taught are about the fundamentals",
          },
          {
            "title": "Intermediate Course",
            "image": intermediate,
            "description": "Already know to play Chess? This course will be best suited for you. Everything taught are the things you need to become a pro",
          },
          {
            "title": "Pro Course",
            "image": pro,
            "description": "Great at chess? This course will be best suited for you. Everything taught are the essentials to win trophies",
          },
          {
            "title": "Begginer Course 2",
            "image": beginner,
            "description": "New to Chess? This course will be best suited for you. Everything taught are about the fundamentals",
          },
          {
            "title": "Intermediate Course 2",
            "image": intermediate,
            "description": "Already know to play Chess? This course will be best suited for you. Everything taught are the things you need to become a pro",
          },
          {
            "title": "Pro Course 2",
            "image": pro,
            "description": "Great at chess? This course will be best suited for you. Everything taught are the essentials to win trophies",
          },
          {
            "title": "Begginer Course 3",
            "image": beginner,
            "description": "New to Chess? This course will be best suited for you. Everything taught are about the fundamentals",
          },
          {
            "title": "Intermediate Course 3",
            "image": intermediate,
            "description": "Already know to play Chess? This course will be best suited for you. Everything taught are the things you need to become a pro",
          },
          {
            "title": "Pro Course 3",
            "image": pro,
            "description": "Great at chess? This course will be best suited for you. Everything taught are the essentials to win trophies",
          },
          {
            "title": "Pro Course 4",
            "image": pro,
            "description": "Great at chess? This course will be best suited for you. Everything taught are the essentials to win trophies",
          }
        ]
      };

      const [isselected, setIsselected] = useState(false);

      const handlePopup = ()=>{
        const newvalue = !isselected;
        sessionStorage.setItem('boolean', newvalue);
        setIsselected(newvalue);
      }
    return(
        <>
        <Navbar/>
        {isselected && (<ViewCourse handlePopup={handlePopup}/>)}
        <div className={isselected ? "courses-container hide-container" : "courses-container"}>
            <h1 className="courses-heading">Our Acadedmy Courses</h1>
            <div className="courses-box_container">
                {coursesData.courses.map(course => (
                <div className="courses-box" key={course.title}>
                    <img src={course.image} alt={course.title} />
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <a className="courses-btn" onClick={handlePopup}>Read More</a>
                </div>
            ))}
            </div>

        </div>

        </>
    );
}

export default Dummy2;
