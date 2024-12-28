import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactFormV1() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const servideId = "service_pejwvdh";
  const templateId = "template_i10zhth";
  const publicKey = "6kmVhUSwT9owQz6da";

  const sendEmail = (e: any) => {
    e.preventDefault();

    const tamplateParams = {
      from_name: name,
      from_email: email,
      to_name: "Bedrijfs naam",
      message: message,
    };

    emailjs
      .send(servideId, templateId, tamplateParams, publicKey)
      .then((res) => {
        console.log("Succes", res);
        setEmail("");
        setMessage("");
        setName("");
        alert("Email has been sent!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-10">
      <form onSubmit={sendEmail} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>

        <div>
          <label htmlFor="user_name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            placeholder="Your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="text-center">
          <input type="submit" value="Send Message" className="w-full bg-blue-500 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-600 transition" />
        </div>
      </form>
    </div>
  );
}
