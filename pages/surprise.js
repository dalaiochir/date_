import Image from "next/image"
import Link from "next/link"

export default function Surprise() {
  return (
    <div className="bg-white/50 backdrop-blur-3xl shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-md text-center border border-white/40 animate-fadeInSoft relative">

      <h1 className="text-3xl sm:text-4xl font-bold text-rose-600 mb-6 animate-pop">
        Зөвхөн чамд зориулсан сюрприз 💝
      </h1>

      <div className="flex justify-center mb-6 animate-pop">
        <Image
          src="/girl.jpg"
          width={300}
          height={300}
          className="rounded-3xl shadow-2xl border-4 border-rose-200"
          alt="Зураг"
        />
      </div>

      <p className="text-gray-700 italic mb-8 text-lg animate-fadeInSoft">
        “Чи миний өдрийг гэрэлтүүлж, миний инээмсэглэлийг илүү тод болгодог…  
        Чамтай хамт байх мөч бүр үнэхээр гайхалтай, яг л зүүд мэт...” 💗
      </p>

      <Link
        className="px-6 py-3 rounded-2xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold shadow-md transition active:scale-90 animate-pop"
        href="/"
      >
        Буцах
      </Link>
    </div>
  )
}
