import React, { useState } from 'react';
import { validateEmail } from './utils/helper';

const Contact = () => {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  function handleChange(e) {
    e.preventDefault();
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage('please enter a valid email');
      } else {
        setErrorMessage('');
      }

    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
        
   
  } 

    return (
      <section className="about">
     <h2 data-testid='h1tag' className="top-title">Contact Me</h2>
        
        <form class="justify-content-center" id="contact-form">
          <div class="mt-5" >
            <label className="formName" htmlFor="name">Name:</label>
            <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div class="mt-5" >
            <label className="formName" htmlFor="email">Email Address:</label>
            <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div class="mt-5" >
            <label className="formName" htmlFor="message">Message:</label>
            <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}

          <div class="mt-5 mb-5" >
            <button data-testid='button' class="btn btn-outline-dark " type="submit" onSubmit={handleSubmit} className="formSubmit" >Submit</button>
          </div>
          </form>
        
      </section>
    );
}

  export default Contact;