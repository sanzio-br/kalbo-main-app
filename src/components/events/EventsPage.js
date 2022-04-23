import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { AiOutlineCalendar } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
export default function Events() {
  const [eventsList, setEventsList] = useState([]);
  const postsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(postsCollectionRef);
      setEventsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, []);
  return (
    <section>
      <div className="card-container">
        {
          eventsList.map(({ title, destination, numOfDays, price, id, author }) => {
            return (
              <div className="eventCard">
                <div className="imgBox">
                  <img src="https://source.unsplash.com/600x400/?computer" alt="" />
                </div>
                <div className="card-details">
                  <p>{title}</p>
                  <span className="location">
                    <GoLocation /> {destination}
                  </span>
                  <span className='date'>
                    <AiOutlineCalendar /> Date:
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