import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Pizza from '../assets/pizza.jpg'

import EntranceAnimation from "./Animation.component";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5gkhqh9', 'template_x4i69tt', form.current, '15mWG15ly1oJ2dymK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

  return (
    <EntranceAnimation>
        <div id="contact" className="lg:grid lg:grid-cols-2 border-black border m-3 rounded-lg  bg-c1/80 shadow-lg shadow-black">
            <div>
                <h1 class='text-white underline text-center p-3 font-extrabold text-xl'>Get in Touch</h1>
                <p class="text-center p-3 text-lg font-semibold text-white ">
Thanks for taking the time to visit my website. If you have any questions or comments about my work, or if you're interested in hiring me for a project, please feel free to get in touch using the form.
                </p>
                <p class="text-center p-3 text-lg font-semibold text-white">
I'll do my best to get back to you as soon as possible. Thanks again for your interest, and I look forward to hearing from you!
                </p>
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail} className="p-6 rounded-lg shadow-md">
                    <label className="block text-white font-bold my-2">Name</label>
                    <input className="border border-black bg-transparent p-2 w-full rounded-lg shadow shadow-black" type="text" name="user_name" />
                    <label className="block text-white font-bold my-2">Email</label>
                    <input className="border border-black bg-transparent p-2 w-full rounded-lg shadow shadow-black" type="email" name="user_email" />
                    <label className="block text-white font-bold my-2">Message</label>
                    <textarea className="border border-black bg-transparent p-2 w-full rounded-lg shadow shadow-black" name="message" />
                    <input className="bg-white text-black py-2 px-4 m-1 my-2 rounded-lg hover:bg-transparent hover:border-black hover:border shadow shadow-black" type="submit" value="Send" />
                </form>
            </div>
        </div>
    </EntranceAnimation>
  );
};

export default ContactForm;