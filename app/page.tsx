import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="">
      <div className='h-screen bg-gray-200' id='home'>
        <Navbar />
      </div>
      <div className='h-screen bg-purple-200' id='pricing'></div>
      <div className='h-screen bg-green-200' id='contact'></div>
    </main>
  )
}
