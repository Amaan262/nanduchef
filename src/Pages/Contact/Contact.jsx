import { contact } from '../../Images/images';
import './Contact.scss'

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };


//   const addClass = async () => {
//     if(!name || !email) {
//       alert('Please fill all the fields');
//       return;
//     }
//     document.querySelector('.contact_container').classList.add('sent');
//   }
//   return (
//     <>
//       <div className="contact_container ">
//         {/* <small>Enter message (optional) and click button "Send"</small> */}
//         <div className=" wrapper centered">
//           <form className="letter">
//             <div className="side">
//               <h1>Contact us</h1>
//               <p>
//                 <textarea placeholder="Your message"></textarea>
//               </p>
//             </div>
//             <div className="side">
//               <p>
//                 <input id='fname' name='Name' type="text" placeholder="Your name" onChange={handleNameChange} required value={name} />
//               </p>
//               <p>
//                 <input id='email' name='Email'  type="email" placeholder="Your email" onChange={handleEmailChange} required value={email} />
//               </p>
//               <p>
//                 <button type='submit' onClick={addClass}>Send</button>
//               </p>
//             </div>
//           </form>
//           <div className="envelope front"></div>
//           <div className="envelope back"></div>
//         </div>
//         <p className="result-message centered">Thank you for your message</p>
//       </div>
//     </>
//   );
// };

// export default Contact;



const Contact = () => {

  const submitForm = async () => {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyF-pNt7JtGGrwKJYyRMlVi9jdpU8CY7OUxtXGAD6sj8cryFkORIwMdR1pSCmmdtxXioA/exec"

    const form = document.forms['google-sheet']
    // const loader = document.getElementById("loader")
    await form.addEventListener('submit', e => {
      e.preventDefault()
      // loader.style.visibility = "visible"
      const boxi = document.getElementById('boxi');


      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          form.reset();
          boxi.innerHTML = "Thank you! Response Recieved ✅";


          setTimeout(() => {
            boxi.innerHTML = ""

          }, 3000);
        })
        .catch(error => console.error('Error!', error.message))
    })

  }




  return (
    <>
      <section id="contact">
        <h1><i className="fas fa-headset"></i> Get in Touch</h1>
        <div className="contact__container">
          <div className="contact__content">
            <div className="contact__image__box">
              <img src={contact} alt="contact" />
            </div>
            <form method="POST" name="google-sheet" id="contact__form">
              <div className="form__group">
                <div className="field">
                  <input type="text" name="Name" placeholder="Name" required />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input type="email" name="Email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="Phone" placeholder="Phone" required />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="field">
                  <textarea type="text" name="Message" placeholder="Message" required />
                  <i className="fas fa-comment-dots"></i>
                </div>
                <div className="button-area">

                  <button type="submit" name="submit" onClick={submitForm}>
                    Submit <i className="fa fa-paper-plane"></i>
                  </button>
                  {/* <img id="loader" src={loading} alt="loading" /> */}
                </div>
              </div>
              <div id="boxi"></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;



