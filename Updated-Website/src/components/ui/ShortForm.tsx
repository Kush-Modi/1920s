import React from 'react';

export default function ShortForm() {
  return (
    <form
      className="bg-zinc-900 px-8 py-10 rounded-[32px] gap-6 flex flex-col sm:flex-row items-center justify-center border border-white/5 shadow-2xl transition-all hover:bg-black"
    >
      <div className="w-full sm:w-[60%]">
        <input
          type="email"
          id="email-subscribe"
          name="email"
          placeholder="Email address"
          className="bg-white/10 w-full px-8 py-4 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all font-general-sans"
        />
      </div>
      <button 
        type="submit" 
        className="w-full sm:w-[40%] btn-secondary py-4 !bg-white !text-black hover:!bg-zinc-200 border-none transition-transform active:scale-95"
      >
        Subscribe Now
      </button>
    </form>
  );
}
