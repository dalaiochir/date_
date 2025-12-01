import { useRouter } from "next/router"
import { useState } from "react"

export default function DatePage() {
  const router = useRouter()
  const location = "Café Aroma — Romantic Setup"
  const time = "2025-12-05 • 19:00"
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSurprise = () => {
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
      router.push("/surprise")
    }, 2500)
  }

  return (
    <div className="bg-white/50 backdrop-blur-3xl shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-md text-center border border-white/40 animate-fadeInSoft relative">

      {showConfetti && <HeartConfetti />}

      <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6 animate-pop">
        Бидний болзоо төгс байх болно 💘
      </h1>

      <div className="text-gray-700 text-left space-y-3 mb-6 animate-fadeInSoft">
        <p><span className="font-bold text-pink-500">Надтай болзоонд явах шийдвэрийг гаргасан чамд үнэхээр их баярлалаа🫶🏻🥹</span></p>
        <p><span className="font-bold text-pink-500">📍 Хаана:</span> {location}</p>
        <p><span className="font-bold text-pink-500">🕒 Хэзээ:</span> {time}</p>
      </div>

      <button
        onClick={handleSurprise}
        className="px-5 sm:px-7 py-2 sm:py-3 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold shadow-xl hover:scale-105 sm:hover:scale-110 transition-all duration-200 active:scale-90 animate-pop"
      >
        🎁 Surprise!
      </button>
    </div>
  )
}

function HeartConfetti() {
  const colors = ["#FF6B6B", "#FFB6C1", "#FF69B4", "#FFC0CB", "#FF1493"]
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 90 + "vw",
    delay: Math.random() * 2 + "s",
    scale: 0.5 + Math.random() * 0.7,
    color: colors[Math.floor(Math.random() * colors.length)],
  }))

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {hearts.map(h => (
        <div
          key={h.id}
          style={{
            left: h.left,
            animationDelay: h.delay,
            transform: `scale(${h.scale})`,
            color: h.color,
          }}
          className="absolute text-xl sm:text-2xl animate-heartFall"
        >
          ❤️
        </div>
      ))}
    </div>
  )
}
