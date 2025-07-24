import { portfolioData } from "../data/portfolio";

export const ContactSection = () => (
    <section id="contact" className="text-center">
        <h2 className="text-3xl font-extrabold mb-2 text-gray-900">Contact Me</h2>
        <p className="text-gray-700 mb-10">Have a project in mind? Let's discuss how I can help you.</p>
        <div className="grid gap-6 md:grid-cols-3">
            <form className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-6 text-left">
                <h3 className="text-lg font-bold mb-2 text-gray-700">Send me a message</h3>
                <p className="text-sm text-gray-500 mb-4">I’ll get back to you within 24h</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your name" className="px-4 py-2 rounded-md bg-white text-gray-800" />
                    <input type="email" placeholder="your@email.com" className="px-4 py-2 rounded-md bg-white text-gray-800" />
                </div>
                <input type="text" placeholder="Subject" className="w-full mt-4 px-4 py-2 rounded-md bg-white text-gray-800" />
                <textarea placeholder="Describe your project..." rows={4} className="w-full mt-4 px-4 py-2 rounded-md bg-white text-gray-800" />
                <button type="submit" className="mt-4 w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-2 rounded-md font-semibold">Send Message</button>
            </form>
            <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md text-gray-700 rounded-2xl shadow-md p-6 text-left">
                    <div className="text-indigo-400 text-2xl mb-2"><i className="fa-solid fa-envelope"></i></div>
                    <h4 className="font-bold">Email</h4>
                    <p>{portfolioData.contact.email}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md text-gray-700 rounded-2xl shadow-md p-6 text-left">
                    <div className="text-green-400 text-2xl mb-2"><i className="fa-solid fa-phone"></i></div>
                    <h4 className="font-bold">Phone</h4>
                    <p>{portfolioData.contact.phone || '+00 000 000 000'}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md text-gray-700 rounded-2xl shadow-md p-6 text-left">
                    <div className="text-pink-400 text-2xl mb-2"><i className="fa-solid fa-location-dot"></i></div>
                    <h4 className="font-bold">Location</h4>
                    <p>{portfolioData.contact.location || 'City, Country'}</p>
                </div>
            </div>
        </div>
    </section>
);
