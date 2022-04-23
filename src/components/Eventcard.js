import { AiOutlineCalendar } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
// import './card.css'
export default function Eventcard() {
    return (
        <div className='card-container' >
            <div className="eventCard">
                <div className="imgBox">
                    <img src="https://source.unsplash.com/600x400/?computer" alt="" />
                </div>
                <div className="card-details">
                    <span className="location">
                        <GoLocation />
                    </span>
                    <span className='date'>
                        <AiOutlineCalendar /> Date:
                    </span>
                    <span className="days">
                        <AiOutlineClockCircle /> Number of days:
                    </span>
                    <button><span>ksh</span>3000<span>.00</span></button>
                </div>
            </div>
        </div>
    )
}