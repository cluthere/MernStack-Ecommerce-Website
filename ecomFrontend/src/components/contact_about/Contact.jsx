import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative mt-10 pt-10">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.35952187974056!2d77.18258929305!3d28.741247955779905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01c4b38e6bbd%3A0x182f513c095f7bc5!2sP5RM%2BH3G%2C%20Hari%20Park%2C%20Mukandpur%20Part%202%2C%20Mukundpur%2C%20Delhi%2C%20110084!5e0!3m2!1sen!2sin!4v1701084717376!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Details
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
            Phone Number - +91-98180-86182 <br/>
             Address - House no - 61, Gali no -5 Radha Vihar, Mukundpur, New Delhi, North Delhi, Delhi, 110042
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
