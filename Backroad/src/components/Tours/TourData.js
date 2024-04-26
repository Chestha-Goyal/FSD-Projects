import { FaMap } from 'react-icons/fa';
import './Tours.css';

function TourData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <div className='info'>
                <span><FaMap/></span>
                <span>{props.location}</span>
                <span>{props.days}</span>
                <span>{props.price}</span>
            </div>
        </div>
    )
}

export default TourData