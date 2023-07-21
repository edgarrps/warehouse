export default function Header () {

    

    return (
        <div className='h-[120px] bg-blue-100 font-mono text-center'>
        <p className='pt-4 pb-2 text-blue-400'>WAREHOUSE</p>
        <div className='flex justify-center space-x-4'>
          <div className='grid grid-cols-1'>
            <label htmlFor='item'>Item</label>
            <input id='item' className='pl-2 rounded-md bg-stone-100 border-4 border-blue-200 w-96' />
          </div>
          <div className='grid grid-cols-1'>
            <label htmlFor='amount'>Amount</label>
            <input id='amount' type='number' min={1} className='pl-1 rounded-md bg-stone-100 border-4 border-blue-200 w-12' />
          </div>
          <div><p className='opacity-0 cursor-default'>U+200B</p>
            <button className='w-8 h-8 rounded-md bg-blue-400 text-stone-200'>+</button></div>
        </div>
      </div>
    )
}