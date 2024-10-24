import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import HeaderContent from "../../Component/HeaderContent/Hero";
import {Animate} from "react-simple-animate";
import './Contact.css';

const Contact=()=>{
    return(
        <section id="Contact" className="Contact">
            <HeaderContent
            headerText = " My Contact"
            icon = {<BsInfoCircleFill size={40}/>}
            />
            <div className="contact__content">
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform : "translateX(-200px)"
                }}
                end={{
                    transform : "translateX(0px)"
                }}
                >
                    <h3 className="contact__content__header">Let's Talk</h3>
                </Animate>
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform : "translateX(200px)"
                }}
                end={{
                    transform : "translateX(0px)"
                }}
                >
                    <div className="contact__content__form">
                        <div className="contact__content__form__control-wrapper">
                            <div>
                                <input required name="name" className="inputName" type={"text"} />
                                <label htmlFor="name" className="nameLable">Name</label>
                            </div>
                            <div>
                                <input required name="email" className="inputEmail" type={"text"} />
                                <label htmlFor="email" className="emailLable">Email</label>
                            </div>
                            <div>
                                <textarea required name="disription" className="inputDisription" type={"text"} rows = "5"/>
                                <label htmlFor="disription" className="discriptionLable">Description</label>
                            </div>
                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
            </div>
        </section>
    )
}
export default Contact;