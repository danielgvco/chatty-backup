import Image from 'next/image'
import Navbar from '@/components/Navbar'
import PricingCard from '@/components/PricingCard'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className='h-screen p-[10rem] flex items-center justify-between bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white via-stone-100 to-violet-200' id='home'>
        <div>
          <h1 className='text-[6rem] font-[700] bg-gradient-to-l from-violet-200 via-violet-400 to-violet-600 bg-clip-text text-transparent'>Chatty</h1>
          <p className='text-[2rem]'>Turning Conversations into Conversions!</p>
        </div>
        <Image src='/home-image.png' alt='chat-bubble-hero' width={500} height={500} />
      </div>
      <div className='h-screen p-[8rem] flex items-center justify-between bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-stone-100 to-violet-200' id='pricing'>
        <PricingCard name='Basic' description='For small businesses' price={99} features={['Feature 1', 'Feature 2', 'Feature 3']} />
        <PricingCard name='Pro' description='For medium businesses' price={199} features={['Feature 1', 'Feature 2', 'Feature 3']} />
        <PricingCard name='Enterprise' description='For large businesses' price={299} features={['Feature 1', 'Feature 2', 'Feature 3']} />
      </div>
      <div className='h-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white via-stone-100 to-violet-200' id='contact'></div>
    </main>
  )
}
