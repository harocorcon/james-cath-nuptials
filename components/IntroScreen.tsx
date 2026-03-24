"use client"

export default function IntroScreen({ onOpen }: { onOpen: () => void }) {

  return (

    <div className="fixed inset-0 bg-[#f8f6f2] flex flex-col items-center justify-center text-center z-50">

      <p className="text-sm tracking-widest text-gray-500 mb-4">
        You are invited to the wedding of
      </p>

      <h1 className="text-4xl font-parisienne text-gray-800 mb-6">
        James and Catherine
      </h1>

      <p className="text-gray-600 mb-10">
        Tap to open your invitation
      </p>

      <button
        onClick={onOpen}
        className="border border-gray-800 px-6 py-3 rounded-full text-sm tracking-wide hover:bg-gray-800 hover:text-white text-gray-800 transition"
      >
        Open Invitation
      </button>

    </div>

  )
}