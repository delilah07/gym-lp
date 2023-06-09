import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="join">
      <div className="join__left">
        <h2 className="join__header">
          <span className="border-text">ready to</span>
          <span> level up</span> <br />
          <span>your body </span>
          <span className="border-text">with us?</span>
        </h2>
      </div>
      <div className="join__right">
        <form action="" className="join__form" onSubmit={sendEmail}>
          <input
            type="email"
            name="user-email"
            placeholder="Enter your Email address"
            id=""
          />
          <button className="join__btn btn btn-orange">Join now</button>
        </form>
      </div>
    </section>
  );
};

export default Join;
