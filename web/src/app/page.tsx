"use client"

interface warehouse {
  id: number
  name: string
  amount: number
  status: string
}

import Header from "@/components/Header"
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
    <Header/>
    <div className='grid place-items-center text-center pt-10'>
      <table className="bg-blue-400 w-[600px] rounded-xl">
        <thead>
          <tr className="text-xl bg-stone-100 rounded-2xl">
            <th>ID</th>
            <th>ITEM</th>
            <th>AMOUNT</th>
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
              <td className={item.status == "good" ? "font-bold text-green-400 drop-shadow-md" : item.status == "poor" ? "text-red-600 font-bold drop-shadow-md" : "font-bold drop-shadow-lg"}>{item.status}</td>
              <td>&#128465;</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </main>
  )
}
