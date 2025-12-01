import { useRouter } from "next/router"
import { useState } from "react"

export default function DatePage() {
  const router = useRouter()
  const location = "Хамтдаа дуртай дуугаа сонсож өдрийг эхлүүлнэ. Хоолонд орж дуртай амттангаа иднэ. Кино үзэх, Тоглох, Шөнийн зугаалга гэх мэт зүйлс багтсан."
  const time = "Чиний хүссэн өдөр"
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSurprise = () => {
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
      router.push("/surprise")
    }, 2500)
  }

  return (
    <div style={containerStyle}>
      {showConfetti && <HeartConfetti />}
      <h1 style={titleStyle}>Бидний болзоо төгс байх болно💘</h1>

      <div style={{marginBottom:'24px'}}>
        <p>Надтай болзоонд явах шийдвэрийг гаргасан чамд үнэхээр их баярлалаа🫶🏻🥹</p>
        <p>📋 Хийх зүйлсийн жагсаалт: {location}</p>
        <p>🕒 Хэзээ: {time}</p>
      </div>

      <button onClick={handleSurprise} style={{...buttonStyle, background:'#ec4899'}}>
        🎁 Surprise 🎁
      </button>
    </div>
  )
}

function HeartConfetti() {
  const colors = ["#FF6B6B","#FFB6C1","#FF69B4","#FFC0CB","#FF1493"]
  const hearts = Array.from({ length: 30 }, (_,i) => ({
    id:i,
    left: Math.random()*90 + "vw",
    delay: Math.random()*2 + "s",
    scale: 0.5 + Math.random()*0.7,
    color: colors[Math.floor(Math.random()*colors.length)]
  }))

  return (
    <div style={{position:'fixed', inset:0, pointerEvents:'none', zIndex:50, overflow:'hidden'}}>
      {hearts.map(h => (
        <div key={h.id} style={{
          position:'absolute',
          left:h.left,
          color:h.color,
          transform:`scale(${h.scale})`,
          animation:'heartFall 2.5s ease-out forwards'
        }}>
          ❤️
        </div>
      ))}
    </div>
  )
}

const containerStyle = {
  background:'rgba(255,255,255,0.5)',
  backdropFilter:'blur(16px)',
  borderRadius:'24px',
  padding:'24px',
  maxWidth:'400px',
  width:'90%',
  textAlign:'center',
  border:'1px solid rgba(255,255,255,0.4)',
  boxShadow:'0 10px 20px rgba(0,0,0,0.1)',
  position:'relative'
}

const titleStyle = {
  fontSize:'1.8rem',
  color:'#db2777',
  marginBottom:'16px'
}

const buttonStyle = {
  padding:'12px 24px',
  borderRadius:'24px',
  color:'white',
  fontWeight:'bold',
  border:'none',
  cursor:'pointer'
}
