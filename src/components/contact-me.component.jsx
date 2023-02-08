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
    <div id="contact" className="grid grid-cols-2 border-black border m-3 rounded-lg  bg-c1/30 shadow-lg shadow-black">
        <div>
            <EntranceAnimation>
                <p class="text-center p-3 text-lg ">Instead of some text why you should message me have picture of pizza instead!</p>
            </EntranceAnimation>
            <EntranceAnimation>
                <div class="flex justify-center">
                    <img class="rounded-xl shadow shadow-black w-96 border border-black m-1" src={Pizza} />
                </div>
            </EntranceAnimation>
        </div>
        <div>
            <EntranceAnimation>
                <form ref={form} onSubmit={sendEmail} className="p-6 rounded-lg shadow-md">
                    <label className="block text-white font-bold my-2">Name</label>
                    <input className="border border-black bg-transparent p-2 w-full rounded-lg shadow shadow-black" type="text" name="user_name" />
                    <label className="block text-white font-bold my-2">Email</label>
                    <input className="border border-black bg-transparent p-2 w-full rounded-lg shadow shadow-black" type="email" name="user_email" />
                    <label className="block text-white font-bold my-2">Message</label>
                    <textarea className="border border-black bg-transparent p-2 w-full rounded-lg shadow shadow-black" name="message" />
                    <input className="bg-white text-black py-2 px-4 m-1 my-2 rounded-lg hover:bg-transparent hover:border-black hover:border shadow shadow-black" type="submit" value="Send" />
                </form>
            </EntranceAnimation>
        </div>
    </div>
  );
};

export default ContactForm;