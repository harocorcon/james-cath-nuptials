"use client"

import { useRef } from "react"

export default function MusicPlayer({ play }: { play: boolean }) {

  const audioRef = useRef<HTMLAudioElement>(null)

  if (play) {
    audioRef.current?.play().catch(() => {})
  }

  return (
    <audio ref={audioRef} loop>
      <source src="/wedding-song.mp3" type="audio/mpeg" />
    </audio>
  )
}