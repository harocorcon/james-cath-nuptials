"use client"

import { useEffect, useState } from "react"

export default function Countdown() {

  const targetDate = new Date("2026-04-25T10:00:00")

  const [timeLeft, setTimeLeft] = useState<any>(null)

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      setTimeLeft({ days, hours, minutes })

    }, 1000)

    return () => clearInterval(interval)

  }, [])

  if (!timeLeft) return null

  return (

    <div className="p-6">

  <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-[#e8e2d8] p-6">

    <p className="text-sm uppercase tracking-widest text-gray-800 mb-4">
      Countdown to our wedding
    </p>

    <div className="flex justify-center gap-6">

      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
      ].map((item, i) => (
        <div key={i} className="text-center">

          <p className="text-3xl font-semibold text-[#c6a85b]">
            {item.value}
          </p>

          <p className="text-xs text-gray-500 tracking-wide">
            {item.label}
          </p>

        </div>
      ))}

    </div>

  </div>

</div>

  )
}