import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MdOutlineCancel} from 'react-icons/md'
import {Modal} from 'react-bootstrap'
function Example() {
    // Form js code
       const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3vrmufn', 'template_3kyh5vp', form.current, "e7NQ0GEhjAuILmM8J")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="booking-form">
            <div className='form-fill'>
            <span><MdOutlineCancel/></span>
            <h4 className="">
                Fill your details for booking
            </h4>
            <form className="form" ref={form} onSubmit={sendEmail}>
                <label>First Name</label>
                <input type="text" placeholder="First Name" name="user_firstname" required />
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" name="user_lastname" required />

                <label>Email</label>
                <input type="email" name="user_email" placeholder="example@gmail.com" required />
                <label>Phone Number</label>
                <input placeholder="Phone number" name="user_phone"  required />
                <input type="submit" />
            </form>
            </div>
        </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }