import React from 'react'
import { RiPlanetLine } from "@remixicon/react";

const onboarding = () => {
  return (
    <div className='w-full h-screen flex bg-[#1e1e1e]'>
      <div className="left-side w-1/2 p-4 ">
        <div className="image w-full bg-[url('./assets/clove.jpg')] bg-cover bg-center h-full rounded-3xl flex flex-col justify-between">
          <div className="header flex items-center text-[#1e1e1e] p-6 gap-2">
            <RiPlanetLine size={36} />
            <h3 className="text-[28px] font-bold font-source">LinkSpace</h3>
          </div>
          <div className="footer flex flex-col items-start text-[#1e1e1e] p-6 gap-2">
            <p className="font-open text-md font-medium opacity-75 ">Claim your digital space.</p>
            <h4 className='font-work text-[3.5rem] leading-16 w-11/12 font-semibold'>One simple link for everything you create and share</h4>
          </div>
        </div>
      </div>
      <div className="right-side w-1/2 flex flex-col justify-center items-center text-white px-8 py-12 lg:px-16">
        <div className="w-full max-w-md flex flex-col">
          <div className="top-heading mb-10">
            <h2 className="text-3xl font-work font-bold mb-2 leading-tight tracking-tight">Start building your linkSpace</h2>
            <p className="text-[#a0a0a0] font-open text-sm w-11/12">Join a growing community of creators and professionals. Set up your personalized profile today and change how you share your work with the world.</p>
          </div>
          <div className="form-login mb-6">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <input type="email" name="Email" placeholder="Email address" className="w-full bg-transparent border border-[#333] rounded-xl px-5 py-4 text-white placeholder-[#777] focus:outline-none focus:border-white focus:bg-[#252525] transition-all font-open text-[15px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <input type="password" name="Password" placeholder="Password" className="w-full bg-transparent border border-[#333] rounded-xl px-5 py-4 text-white placeholder-[#777] focus:outline-none focus:border-white focus:bg-[#252525] transition-all font-open text-[15px]" />
              </div>
              <button type="submit" className="w-full bg-neutral-200 text-[#1e1e1e] font-work font-semibold text-lg py-3 rounded-xl hover:bg-neutral-400 transition-colors mt-2 shadow-sm">Get Started</button>
            </form>
          </div>
          <div className="footer-signUp text-center mt-2">
            <p className="text-[#a0a0a0] font-open text-[15px]">Don't have an account? <a href="/signup" className="text-white font-semibold hover:underline underline-offset-4">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default onboarding