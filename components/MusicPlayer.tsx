"use client"

import { useEffect, useRef } from "react"

export default function MusicPlayer({ play }: { play: boolean }) {

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.currentTime = 15 // ⏩ start at 15 seconds
      audioRef.current.play().catch(() => {})
    }
  }, [play])

  return (
    <audio ref={audioRef} loop>
      <source src="/hinaut.mp3" type="audio/mpeg" />
    </audio>
  )
}