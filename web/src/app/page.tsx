"use client"

interface warehouse {
  id: number
  name: string
  amount: number
  status: string
}

import { useEffect, useState } from "react"

export default function Home() {
  const [items, setItems] = useState<warehouse[]>([])
  
  useEffect(() => {
    fetch("http://localhost:5000/db", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then(data => {
        setItems(data.warehouse)
      })
      .catch((err) => console.log(err))
  }, [])

  return (<main className='h-screen bg-blue-200'>
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
    <div className='grid place-items-center text-center pt-10'>
      <table className="bg-blue-400 w-[600px] rounded-xl">
        <thead>
          <tr className="text-xl bg-stone-100 rounded-2xl">
            <th>ID</th>
            <th>ITEM</th>
            <th>QUANTITY</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody className=" text-stone-100">
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
                <td>&#128465;</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </main>
  )
}
