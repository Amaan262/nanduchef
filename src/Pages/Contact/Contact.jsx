import {  useState } from 'react';
import './Contact.scss'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const addClass = async () => {
    if(!name || !email) {
      alert('Please fill all the fields');
      return;
    }
    document.querySelector('.contact_container').classList.add('sent');
  }
  return (
    <>
      <div className="contact_container ">
        <small>Enter message (optional) and click button "Send"</small>
        <div className=" wrapper centered">
          <article className="letter">
            <div className="side">
              <h1>Contact us</h1>
              <p>
                <textarea placeholder="Your message"></textarea>
              </p>
            </div>
            <div className="side">
              <p>
                <input type="text" placeholder="Your name" onChange={handleNameChange} required value={name} />
              </p>
              <p>
                <input type="email" placeholder="Your email" onChange={handleEmailChange} required value={email} />
              </p>
              <p>
                <button  onClick={addClass}>Send</button>
              </p>
            </div>
          </article>
          <div className="envelope front"></div>
          <div className="envelope back"></div>
        </div>
        <p className="result-message centered">Thank you for your message</p>
      </div>
    </>
  );
};

export default Contact;
