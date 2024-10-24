import React from "react";
import {BsBootstrap, BsInfoCircleFill} from "react-icons/bs"
import HeaderContent from "../../Component/HeaderContent/Hero";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub,FaReact} from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import {VscCode} from"react-icons/vsc"
import './Skills.css';
import { Animate } from "react-simple-animate";

const Skills=()=>{
    return(
        <section id="skills" className="skills">
            <HeaderContent
            headerText = "My Skills"
            icon = {<BsInfoCircleFill size={40}/>}
            />
            <div className="skills__content">
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform : 'translatex(900px)'
                }}
                end={{
                    transform : 'translatex(0px)'
                }}
                >
                <div className="skills__contentInner">
                    <div>
                    <BsBootstrap size={55} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <IoLogoJavascript size={55} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <FaGithub size={55} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <TiHtml5 size={55} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <FaCss3Alt size={55} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <FaReact size={55} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <FaFigma size={55} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                    <VscCode size={55} color="var(--yellow-theme-main-color)"/>
                    </div>
                </div>
                </Animate> 
            </div>
        </section>
    )
}
export default Skills;