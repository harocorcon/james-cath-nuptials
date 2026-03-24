"use client"

import Countdown from "./Countdown"
import { Parisienne, Tangerine } from "next/font/google"

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
})

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: "400",
})

export default function Hero({ name }: { name: string }) {

  return (

    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white pt-10"> 
    {/* bg-[#f8f6f2]"> */}

      {/* Couple Illustration */}
      <div className="animate-[float_6s_ease-in-out_infinite]">
        <img
        src="/couple.png"
        className="rounded-full object-cover w-full max-w-xs mx-auto"
      />
      </div>


      {/* Names */}

      <h1 className={`text-4xl md:text-5xl ${parisienne.className} tracking-wide text-[#be9408]`}>
        James Alan <br/> and <br/> Catherine
      </h1>

      <p className={`${tangerine.className} mt-4 text-lg  text-gray-600 max-w-md leading-relaxed`}>
        I will marry my best friend, the person with whom I laugh, live, dream, and love.
      </p>

      {/* Wedding Details */}
    <div className="mt-10 px-6">

  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#e8e2d8] p-6 text-center">

    {/* Date & Time */}
    <p className="text-lg text-gray-800 leading-relaxed">
      April 25, 2026 (Saturday)
      <br />
      <span className="text-base text-gray-600">
        10:00 AM
      </span>
    </p>

    {/* Divider */}
    <div className="w-12 h-[1px] bg-[#d6cfc4] mx-auto my-4"></div>

    {/* Church */}
    <p className="text-sm text-gray-700 font-medium">
      Saint Michael the Archangel Parish
    </p>

    <p className="text-sm text-gray-500">
      Hindang, Leyte
    </p>

    {/* Reception */}
    <p className="mt-3 text-sm text-gray-600 italic">
      Reception will follow at Bayan's Resortel
    </p>

    {/* Divider */}
    <div className="w-12 h-[1px] bg-[#d6cfc4] mx-auto my-4"></div>

    {/* Motif */}
    <div className="flex flex-col items-center justify-center gap-2 text-sm text-gray-600">

      <div className="flex flex-col items-center gap-2">
        <span>Motif:</span>

        <span className="font-medium text-gray-800">
            Champagne Gold
        </span>
        </div>
      {/* Color circle instead of image (cleaner!) */}
      <div className="flex gap-2">
        <span className="w-5 h-5 rounded-full border border-gray-300 bg-[#fdf2cf]"></span>
        <span className="w-5 h-5 rounded-full border border-gray-300 bg-[#fdedc6]"></span>
        <span className="w-5 h-5 rounded-full border border-gray-300 bg-[#eee6c8]"></span>
        <span className="w-5 h-5 rounded-full border border-gray-300 bg-[#fbe9d6]"></span>
        <span className="w-5 h-5 rounded-full border border-gray-300 bg-[#eedcb9]"></span>
        </div>
    </div>

  </div>

  

</div>
      {/* Personalized Greeting */}
    <div className="px-6 py-16 text-center">

  {/* Card */}
  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#e8e2d8] p-8">

    {/* Greeting */}
    <p className="text-gray-700 text-base mb-6">
      Hi <span className="font-medium text-gray-900">{name[0].toUpperCase() + name.slice(1)}</span>,
    </p>

    {/* Letter Body */}
    <p className="text-gray-600 leading-relaxed text-[15px] space-y-4">
      With joyful hearts, we invite you to witness a very special moment in our lives
      as we begin a new chapter together.

      <br /><br />

      Your presence will make our celebration even more meaningful,
      and we would be truly honored to have you with us on this day.

      <br /><br />

      Join us as we exchange vows, celebrate love,
      and create beautiful memories together.
    </p>

    {/* Divider */}
    <div className="w-16 h-[1px] bg-[#d6cfc4] mx-auto my-8"></div>

    {/* Closing */}
    <p className="text-gray-600 italic">
      With love,
    </p>

    {/* Names (Parisienne font) */}
    <p className="mt-2 text-3xl text-gray-800 font-parisienne">
      James & Catherine
    </p>

  </div>

</div>


      {/* Countdown */}

      <div className="m-5">
        <Countdown />
      </div>

    </section>

  )
}