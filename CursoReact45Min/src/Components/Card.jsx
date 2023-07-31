import { Link } from "react-router-dom";
import "./Card.css";

function Card({title, description}){
    return ( <div className="Card">
        <h2> <Link to={title}>{title}</Link> </h2>
        <p>{description}</p>
        </div> ) ;
}
export default Card;