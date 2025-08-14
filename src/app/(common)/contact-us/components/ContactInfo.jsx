import React from "react";

const ContactInfo = () => {
  return (
    <section className="w-full bg-[#1c192d]">
      {/* <div className="container mx-auto w-full px-4 md:px-0 flex flex-col md:flex-row items-stretch">
        <div className="flex-31/72 flex flex-col justify-center text-white p-8 lg:py-32.5 rounded-lg">
          <p className="text-teal-400 text-base font-medium mb-2">
            Contact Info
          </p>
          <h3 className="font-azonix text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            WE ARE ALWAYS HAPPY TO ASSIST YOU
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-teal-300 mb-1">Email Address</p>
              <p className="text-lg font-medium">spaceleads@alfaisal.edu</p>
            </div>
            <div>
              <p className="text-teal-300 mb-1">Number</p>
              <p className="text-lg font-medium">+966 011 215 7777</p>
            </div>
          </div>
          <p className="text-gray-300">
            Alfaisal University,
            <br />
            Riyadh - Kingdom of Saudi Arabia
          </p>
        </div>
      </div> */}
      <div className="text-[1.375rem] w-full mx-auto px-4 md:px-0 flex flex-col md:flex-row items-stretch">
        <div className="flex-31/72 lg:ps-30 flex flex-col justify-center text-white p-8 lg:py-32.5 rounded-lg">
          <p className="text-secondary text-[1.375rem]  mb-6">Contact Info</p>
          <h3 className="font-azonix text-2xl md:text-3xl lg:text-[2.5rem] mb-15 leading-tight">
            WE ARE ALWAYS HAPPY TO ASSIST YOU
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-6">
            <div className="">
              <div>
                <p className="text-teal-300 mb-1">Email Address</p>
                <p className="font-medium">spaceleads@alfaisal.edu</p>
              </div>
              <p className="text-gray-300">
                Alfaisal University,
                <br />
                Riyadh - Kingdom of Saudi Arabia
              </p>
            </div>
            <div>
              <p className="text-teal-300 mb-1">Number</p>
              <p className="font-medium">+966 011 215 7777</p>
            </div>
          </div>
        </div>
        <div className="flex-41/72 w-full h-[inherit] flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.854829608681!2d46.674272376105094!3d24.66312475312408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f04a8d10e834b%3A0xb60f3792b7de22aa!2sAlfaisal%20University!5e0!3m2!1sen!2sin!4v1755173686416!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
