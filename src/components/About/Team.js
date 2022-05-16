import image from '../../images/Kalbo Adventures Karuru Experience 2021-31.jpg'
import { Card } from 'react-bootstrap'
import {AiOutlineStar} from "react-icons/ai"
import {FaRegStarHalf} from "react-icons/fa"
export default function Team() {
    const teamData = [
        {
            id: 1,
            name: "Kalbo",
            position: "CEO",
            rating: 4.5
        },
        {
            id: 2,
            name: "Kago",
            position: "CEO",
            rating: 4.5
        },
        {
            id: 3,
            name: "Kalbo",
            position: "CEO",
            rating: 4.5
        },
        {
            id: 4,
            name: "Kalbo",
            position: "CEO",
            rating: 4.5
        },
    ]
    return (
        <section className='team'>
            <h3 className="oh-desktop" style={{ 'color': 'var(--red)' }}><span className="d-inline-block wow slideInDown">Our Team</span></h3>
            <div className='team-section'>
                {
                    teamData.map(({ id, name, position, rating }) => {
                        return (
                            <Card style={{ width: '18rem' }} key={id}>
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{position}</Card.Title>
                                    <Card.Text>Name : {name}</Card.Text>
                                    <span>
                                        <AiOutlineStar/>
                                        <AiOutlineStar/>
                                        <AiOutlineStar/>
                                        <AiOutlineStar/>
                                        <FaRegStarHalf/>
                                    </span>
                                    <p><span>{rating}</span></p>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </section>
    )
}