import Image from "next/image"
import Link from "next/link"

export default function Surprise() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Чамд зориулсан сюрприз 💝</h1>

      <div style={{display:'flex', justifyContent:'center', marginBottom:'24px'}}>
        <Image src="/girl.jpg" width={300} height={300} style={{borderRadius:'24px', boxShadow:'0 10px 20px rgba(0,0,0,0.2)'}} alt="Зураг"/>
      </div>

      <p style={{fontStyle:'italic', marginBottom:'24px'}}>
        “Чи миний өдрийг гэрэлтүүлж, миний инээмсэглэлийг илүү тод болгодог… 
        Надтай хамт байх мөч бүр үнэхээр гайхалтай, яг чам шигээ.” 💗
      </p>

      <Link href="/">
        <button style={{...buttonStyle, background:'#e5e7eb', color:'#1f2937'}}>
          Буцах
        </button>
      </Link>
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
  fontWeight:'bold',
  border:'none',
  cursor:'pointer'
}
