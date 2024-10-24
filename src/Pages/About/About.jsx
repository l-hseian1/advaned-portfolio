import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import HeaderContent from "../../Component/HeaderContent/Hero";
import { Animate } from "react-simple-animate";
import './About.css';

const personalDetails = [
    {
        label : "Name",
        value : "Lama Hseain",
    },
    {
        label : "Age",
        value : "28",
    },
    {
        label : "Address",
        value : "Damascus",
    },
    {
        label : "Email",
        value : "lama.hsiean@gmail.com",
    },
    {
        label : "Contact Number",
        value : "+963997524646",
    },
];
const jobSummary = "I creat professional web application for business, companies, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion..I design and develop moderen websites and web applecations, web services and online stores. My passion is to become a professinal web developer"
const About=()=>{
    return(
        <section id="about" className="about">
            <HeaderContent
            headerText = "About Me"
            icon = {<BsInfoCircleFill size={40}/>}
            />
            <div className="about__contact">
                <div className="about__contant__personalWrapper">
                <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform : 'translatex(-900px)'
                }}
                end={{
                    transform : 'translatex(0px)'
                }}
                >
                    <h3>Front End Developer</h3>
                    <p>{jobSummary}</p>
                </Animate>
                <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform : 'translatex(500px)'
                }}
                end={{
                    transform : 'translatex(0px)'
                }}
                >
                <h3 className="personalInfo">Personal Information</h3>
                <ul>
                    {
                        personalDetails.map((item,i)=>(
                            <li key={i}>
                                <span className="title">{item.label}</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
                </Animate>
                </div>
                <div className="about__contant__servicesWrapper"></div>

            </div>
        </section>
    )
}
export default About;