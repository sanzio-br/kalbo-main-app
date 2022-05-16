import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { AiOutlineCalendar } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import "../../css/card.css"
export default function Hottours() {
  const [eventsList, setEventsList] = useState([]);
  const postsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(postsCollectionRef);
      setEventsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, []);
  const size = 4;
  const hottours = eventsList.slice(0, size);
  return (
    <section>
      <h3 className="oh-desktop" style={{'color':'var(--red)'}}><span className="d-inline-block wow slideInDown">Hot Tours</span></h3>
      <div className="card-container">
        {
          hottours.map(({ title, destination, numOfDays, price,url,date, id}) => {
            return (
              <div className="eventCard" data-aos="fade-up" key={id}>
                <div className="imgBox">
                  <img src={url} alt="" />
                </div>
                <div className="card-details">
                  <p>{title}</p>
                  <span className="location">
                    <GoLocation /> {destination}
                  </span>
                  <span className='date'>
                    <AiOutlineCalendar /> Date: {date}
                  </span>
                  <span className="days">
                    <AiOutlineClockCircle /> Number of days: {numOfDays}
                  </span>
                  <button><span>ksh </span>{price}<span>.00</span></button>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}