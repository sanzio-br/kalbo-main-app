import logo from "../images/logo 0.5.PNG"
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
export default function Topbar(){
    return(
        <div className="top-bar">
            <div className="logo">
                <img src={logo} alt=""/>
                <h5>Kalbo Adventures</h5>
            </div>
            <div className="call">
                <p>
                    <AiOutlineClockCircle/>
                    09:00 Am - 05:00 pm
                </p>
                <p>
                    <BsFillTelephoneFill/>
                    +254720 126177
                </p>
            </div>
        </div>
    )
}