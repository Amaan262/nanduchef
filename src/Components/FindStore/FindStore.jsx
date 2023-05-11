import React from "react";
import "./findstore.scss";
import pic from "../../images/2.jpg";

const FindStore = () => {
  return (
    <>
      <div className="findstore">
        <div className="container">
          <div
            className="mapinfo"
            // style={{
            //   backgroundImage: `url(${pic})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            // }}
          >
            <div className="box">
              <h2>Nandu Chef (PK Live Bakery)</h2>
              <span>
                Shyam Ganj Chauraha,
                <br />
                Shyam Ganj Flyover, Under,
                <br />
                Bareilly,
                <br />
                Uttar Pradesh - 243001
              </span>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.168434285327!2d79.42639500193769!3d28.35807463242163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a006d4524eb281%3A0x40de8b02a03aa3b4!2sNandu%20Chef%20(PK%20Live%20Bakery)!5e0!3m2!1sen!2sin!4v1682798773688!5m2!1sen!2sin"
              width="700"
              title="find our store"
              //   height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindStore;
