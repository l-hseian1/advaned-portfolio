import './Hero.css';
const HeaderContent =(props)=>{
    const {headerText,icon,image} = props
    return(
        <div className="wrapper">
            <h2>{headerText}</h2>
            <span>{icon}</span>
            <span>{image}</span>
        </div>
    )
}
export default HeaderContent;