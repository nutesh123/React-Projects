import React from 'react'
import BottumHeader from './BottumHeader'
import classes from'./contact.module.css'
import { useState } from 'react';


function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://e-commers-project-9b5cf-default-rtdb.asia-southeast1.firebasedatabase.app/list.json", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
    <div className={classes.div}>
        <form onSubmit={handleSubmit}> 
          <h2> Contact Us</h2>
          <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
         <button type='submit'>button</button>
        </form>
    </div>
    <BottumHeader></BottumHeader>
    </div>
  )
}

export default ContactUs