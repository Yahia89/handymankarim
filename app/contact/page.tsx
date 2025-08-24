"use client";
import React from "react";
// import emailjs from "@emailjs/browser";

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [ setStatus] = useState({ type: "", message: "" });

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setStatus({ type: "loading", message: "Sending..." });

  //   try {
  //     await emailjs.send(
  //       "service_fj89d2i",
  //       "template_ab1dv92",
  //       {
  //         from_name: formData.name,
  //         from_email: formData.email,
  //         message: formData.message,
  //         to_email: "karimsula1012@gmail.com",
  //       },
  //       "WyxltXypAyy7kwhOb"
  //     );

  //     setStatus({ type: "success", message: "Message sent successfully!" });
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (err: unknown) {
  //     console.error("Failed to send email:", err);
  //     setStatus({
  //       type: "error",
  //       message: "Failed to send message. Please try again.",
  //     });
  //   }
  // };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid  gap-12">
          <div className="bg-gray-55 p-1 ">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Hello!
            </h2>
            <div className="prose text-gray-800 space-y-4">
              <p className="text-gray-800">
                Send me a general message with your contact info please.
              </p>
              <p className="text-gray-800">
                You can tell me about your project or ask me to contact you back
                if you have questions.
              </p>
              <p className="pt-4 text-gray-800">Kindest Regards,</p>
              <p className="pt-4 text-gray-800">Call or even text</p>
              <p className="font-semibold text-blue-900">+1 (840) 588-7369</p>
            </div>
          </div>
          <div>
            {/* <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2> */}
            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-100 text-green-700' : 
                  status.type === 'error' ? 'bg-red-100 text-red-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </main>
  );
}
