import '../styles/globals.css'
import { useEffect, useState, useRef } from 'react'

export default function App({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // 💖 Floating hearts
  useEffect(() => {
    const spawnHeart = () => {
      const heart = document.createElement('div')
      heart.innerText = '💖'
      heart.className = 'heart-float'
      heart.style.left = Math.random() * 90 + 'vw'
      heart.style.bottom = '0px'
      heart.style.fontSize = `${12 + Math.random() * 18}px`
      document.body.appendChild(heart)
      setTimeout(() => heart.remove(), 6000)
    }
    const interval = setInterval(spawnHeart, 800)
    return () => clearInterval(interval)
  }, [])

  // 🎹 Piano background
  useEffect(() => {
    const audio = new Audio("/piano.mp3")
    audio.loop = true
    audio.volume = 0.3
    audioRef.current = audio
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked:", e))
      setIsPlaying(true)
    }
  }

  return (
    <>
      {/* Piano toggle button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleAudio}
          className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-pink-400 text-white text-sm sm:text-base shadow-lg hover:bg-pink-500 transition"
        >
          {isPlaying ? "🔊 Pause Piano" : "🎹 Play Piano"}
        </button>
      </div>

      <Component {...pageProps} />
    </>
  )
}
