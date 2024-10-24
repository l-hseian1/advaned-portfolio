import React,{ useState } from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import HeaderContent from "../../Component/HeaderContent/Hero";
import ImageOne from "../../../public/images/skiing.png"
import ImageTwo from "../../../public/images/flora.png"
import ImageThree from "../../../public/images/rent_up.png"
import ImageFour from "../../../public/images/salla_store.png"
import ImageFive from "../../../public/images/online_shop.png"
import ImageSix from "../../../public/images/edujar.png"
import ImageSeven from "../../../public/images/dashstack.png"
import ImageEight from "../../../public/images/portfolio.png"
import './Portfolio.css';

const portfolioData = [
    {
        id : 2,
        name : "Skiing",
        image : ImageOne,
        link : 'https://l-hseian1.github.io/skiing/'
    },
    {
        id : 3,
        name : "Flora",
        image : ImageTwo,
        link : 'https://l-hseian1.github.io/flora/'
    },
    {
        id : 4,
        name : "Rent Up",
        image : ImageThree,
        link : 'https://l-hseian1.github.io/rent-up/'
    },
    {
        id : 5,
        name : "Salla Store",
        image : ImageFour,
        link : 'https://l-hseian1.github.io/salla-store/'
    },
    {
        id : 6,
        name : "Online Shope",
        image : ImageFive,
        link : 'https://l-hseian1.github.io/online-shop/'
    },
    {
        id : 7,
        name : "Edujr",
        image : ImageSix,
        link : 'https://edujar-969u.vercel.app/'
    },
    {
        id : 8,
        name : "DashStack",
        image : ImageSeven,
        link : ''
    },
    {
        id : 9,
        name : "Portfolio",
        image : ImageEight,
        link : ''
    },

]

const filterData = [
    {
        filterId : 1,
        label : 'All'
    },
    {
        filterId : 2,
        label : 'Development'
    },
    {
        filterId : 3,
        label : 'Design'
    },
]
const Portfolio=()=>{

    const [filterdvalue,setfilterdValue] = useState(1)
    const [hoverValue,sethoverValue] = useState(null)

    function handleFilter(currentId){
        setfilterdValue(currentId)
    };

    function handleHover(index){
        sethoverValue(index)
    }

    const filteredItems = filterdvalue === 1 ? portfolioData :
    portfolioData.filter(item=>item.id === filterdvalue)
    return(
        <section id="Portfolio" className="Portfolio">
            <HeaderContent
            headerText = "My Portfolio"
            icon = {<BsInfoCircleFill size={40}/>}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item=>(
                            <li className={item.filterId === filterdvalue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item,index)=>(
                            <div className="portfolio__content__cards__item"
                             key={`cardItem${item.name.trim()}`}
                             onMouseEnter={()=>handleHover(index)}
                             onMouseLeave={()=>handleHover(null)}
                             >
                                <div className="portfolio__content__cards__item__image-wrapper">
                                    <a>
                                        <img src={item.image} />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoverValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button>
                                                    <Link to={item.link} target="_blank" rel="noopener noreferrer" className="visit-link">Visit</Link>
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Portfolio;