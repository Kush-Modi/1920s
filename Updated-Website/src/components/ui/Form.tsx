import React, { useState } from 'react';

export default function Form() {
  const [contactType, setContactType] = useState('say-hi');
  const [message, setMessage] = useState('');

  const handleContactTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setContactType(val);
    if (val === 'get-quote') {
      setMessage("We're interested in your services! Please contact us");
    } else {
      setMessage('');
    }
  };

  return (
    <>
      <div className="relative bg-gray-light rounded-[60px] p-8 md:p-20 overflow-hidden group">
        <form className="relative z-10 w-full lg:max-w-2xl space-y-8">
          <div className="flex flex-wrap gap-8 items-center mb-12">
            <div className="custom-radio">
              <input
                type="radio"
                id="checkbox1"
                name="contact-type"
                value="say-hi"
                checked={contactType === 'say-hi'}
                onChange={handleContactTypeChange}
              />
              <label htmlFor="checkbox1" className="font-general-sans text-xl font-medium cursor-pointer">Say Hi</label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="checkbox2"
                name="contact-type"
                value="get-quote"
                checked={contactType === 'get-quote'}
                onChange={handleContactTypeChange}
              />
              <label htmlFor="checkbox2" className="font-general-sans text-xl font-medium cursor-pointer">Get a Quote</label>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-boska text-2xl mb-3">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full px-8 py-5 border border-black/10 rounded-[24px] bg-white text-black outline-none focus:border-black transition-colors font-general-sans text-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-boska text-2xl mb-3">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-8 py-5 border border-black/10 rounded-[24px] bg-white text-black outline-none focus:border-black transition-colors font-general-sans text-lg"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-boska text-2xl mb-3">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-8 py-5 border border-black/10 rounded-[24px] bg-white text-black outline-none focus:border-black transition-colors font-general-sans text-lg resize-none"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full py-5 text-xl">
            Send Message
          </button>
        </form>

        <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-1/3">
          <div className="relative">
            <div className="absolute inset-0 bg-black/5 rounded-full blur-3xl scale-150"></div>
            <img src="/images/contact-pic.png" alt="Contact Illustration" className="relative w-full h-auto grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </div>
      <style>{`
        .custom-radio input {
          display: none;
        }
        .custom-radio label {
          position: relative;
          padding-left: 45px;
        }
        .custom-radio label::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border: 2px solid rgba(0,0,0,0.1);
          border-radius: 50%;
          background: white;
          transition: all 0.3s;
        }
        .custom-radio label::after {
          content: "";
          position: absolute;
          left: 8px;
          top: 50%;
          transform: translateY(-50%) scale(0);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: black;
          transition: all 0.3s;
        }
        .custom-radio input:checked + label::before {
          border-color: black;
        }
        .custom-radio input:checked + label::after {
          transform: translateY(-50%) scale(1);
        }
      `}</style>
    </>
  );
}
