"use client"

import { useState } from "react"
import Hero from "./Hero"
import IntroScreen from "./IntroScreen"
import MusicPlayer from "./MusicPlayer"

export default function InviteClient({ name }: { name: string }) {

  const [opened, setOpened] = useState(false)

  return (

    <main>

      {/* Music */}
      <MusicPlayer play={opened} />

      {/* Intro */}
      {!opened && (
        <IntroScreen onOpen={() => setOpened(true)} />
      )}

      {/* Content */}
      {opened && (
        <>
          <Hero name={name} />
          {/* other sections */}
        </>
      )}

    </main>

  )
}