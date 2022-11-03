import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-[#0a192f]"
    >
      <form
        action="https://getform.io/f/e50b98ed-caaf-45e2-9fed-40a3aebfa473"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or shoot me an email -
            zituhossain@gamil.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="p-2 my-4 bg-[#ccd6f6]"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
