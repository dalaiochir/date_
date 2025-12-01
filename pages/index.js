import { useRouter } from "next/router"
import { useState } from "react"

export default function Home() {
  const router = useRouter()
  const [noPos, setNoPos] = useState({ top: "auto", left: "auto", position: "relative" })
  const [showPopup, setShowPopup] = useState(false)

  const handleNoHover = () => {
    const top = Math.random() * 60 + 10 + "vh"
    const left = Math.random() * 60 + 10 + "vw"
    setNoPos({ top, left, position: "absolute" })
  }

  const handleNoClick = () => {
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 2000)
  }

  return (
    <div className="relative bg-white/50 backdrop-blur-3xl shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-md text-center border border-white/40 animate-fadeInSoft">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 animate-pop">
        Чи надтай болзоонд явах уу? 💖
      </h1>

      <p className="text-pink-700 italic mb-6 animate-fadeInSoft">
        Амьдралын хамгийн романтик мөч эхлэх гэж байна…
      </p>

      <div className="flex gap-4 justify-center relative">
        <button
          onClick={() => router.push("/date")}
          className="px-5 sm:px-7 py-2 sm:py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-lg hover:scale-105 sm:hover:scale-110 transition-all duration-200 active:scale-90 animate-pop"
        >
          Тийм ❤️
        </button>

        <button
          style={noPos}
          onMouseEnter={handleNoHover}
          onClick={handleNoClick}
          className="px-5 sm:px-7 py-2 sm:py-3 rounded-2xl bg-rose-300 text-white font-semibold shadow-md hover:bg-rose-400 transition active:scale-90 animate-pop"
        >
          Үгүй
        </button>
      </div>

      {showPopup && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-pink-200 text-pink-700 font-bold px-6 py-4 rounded-2xl shadow-xl animate-pop z-50">
          Үгүй гэдэг сонголт байхгүй нь харамсалтай!😳 😳 😳 
        </div>
      )}
    </div>
  )
}
