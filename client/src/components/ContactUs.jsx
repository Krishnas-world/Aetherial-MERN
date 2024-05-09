
import React from 'react';

const inputClasses = 'w-full bg-zinc-800 text-white border border-zinc-700 p-3 rounded focus:outline-none focus:border-zinc-500';
const buttonClasses = 'w-full bg-zinc-700 hover:bg-zinc-600 p-3 rounded text-white';

const ContactForm = () => {
    return (
        <div className="bg-black-900 text-white font-sans w-full">
            <div className="w-fit mx-auto">
                <h1 className="text-6xl font-bold text-center mb-6">CONTACT US</h1>
                <form action="#" method="POST">
                    <div className="space-y-4">
                        <input type="text" name="name" placeholder="Name " required className={inputClasses} />
                        <input type="email" name="email" placeholder="Return address " required className={inputClasses} />
                        <input type="text" name="topic" placeholder="Topic " required className={inputClasses} />
                        <input type="text" name="subject" placeholder="Subject " required className={inputClasses} />
                        <button type="submit" className={buttonClasses}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;