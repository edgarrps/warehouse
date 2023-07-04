import Image from 'next/image'

export default function Home() {
  return (<main className='h-screen bg-blue-200'>
    <div className='h-[120px] bg-blue-100 font-mono text-center'>
      <p className='pt-4 pb-2 text-blue-400'>WAREHOUSE</p>
      <div className='flex justify-center space-x-4'>
        <input className='pl-2 rounded-md bg-stone-100 border-4 border-blue-200 w-96'/>
        <button className='w-8 rounded-md bg-blue-400 text-stone-200'>+</button>
  </div>
    </div>
  </main>
  )
}
