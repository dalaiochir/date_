import { useRouter } from "next/router"
import { useState } from "react"

export default function Home() {
  const router = useRouter()
  const [noPos, setNoPos] = useState({ top: 'auto', left: 'auto', position: 'relative' })
  const [showPopup, setShowPopup] = useState(false)

  const handleNoHover = () => {
    const top = Math.random() * 60 + 10 + "vh"
    const left = Math.random() * 60 + 10 + "vw"
    setNoPos({ top, left, position: 'absolute' })
  }

  const handleNoClick = () => {
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 2000)
  }

  return (
    <div style={{
      background: 'rgba(255,255,255,0.5)',
      backdropFilter: 'blur(16px)',
      borderRadius: '24px',
      padding: '24px',
      maxWidth: '400px',
      width: '90%',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.4)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      position: 'relative'
    }}>
      <h1 style={{ fontSize:'2rem', color:'#db2777', marginBottom:'16px' }}>
        Чи надтай болзоонд явах уу? 💖
      </h1>
      <p style={{ color:'#be185d', fontStyle:'italic', marginBottom:'24px' }}>
        Амьдралын хамгийн романтик мөч эхлэх гэж байна…
      </p>

      <div style={{ display:'flex', justifyContent:'center', gap:'16px', position:'relative' }}>
        <button onClick={() => router.push("/date")} style={buttonStyle}>
          Тийм ❤️
        </button>

        <button onMouseEnter={handleNoHover} onClick={handleNoClick} style={{...buttonStyle, position:noPos.position, top:noPos.top, left:noPos.left, backgroundColor:'#f472b6'}}>
          Үгүй
        </button>
      </div>

      {showPopup && (
        <div style={{
          position:'absolute',
          top:'33%',
          left:'50%',
          transform:'translate(-50%,-50%)',
          backgroundColor:'#fbcfe8',
          color:'#be185d',
          fontWeight:'bold',
          padding:'16px 24px',
          borderRadius:'16px',
          boxShadow:'0 6px 12px rgba(0,0,0,0.2)',
          zIndex:50
        }}>
          Үгүй гэдэг хариулт байхгүй нь харамсалтай юм😳 😳 😳 
        </div>
      )}
    </div>
  )
}

const buttonStyle = {
  padding:'12px 24px',
  borderRadius:'24px',
  backgroundColor:'#ec4899',
  color:'white',
  fontWeight:'bold',
  border:'none',
  cursor:'pointer'
}
