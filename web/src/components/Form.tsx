import { FormEvent, useEffect, useState } from 'react'

// interface ButtonProps {
//  addItem: undefined
//  setAddItem: (value: string) => void
// }

export default function Form() {
  const [addItem, setAddItem] = useState<any | any>('')

  useEffect(() => {
    console.log(addItem)
  }, [addItem])

  const handleClick = (e: any) => {
    setAddItem(e.target.value)
    console.log('teste')
  }

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      className="flex justify-center items-center p-4 h-20 bg-stone-600 font-mono font-bold text-white"
    >
      <div className="flex space-x-8">
        <div className="space-x-2">
          <label>Item:</label>
          <input className="pl-2 rounded-md bg-stone-300 w-40 h-7 text-stone-700" />
        </div>

        <div className="space-x-2">
          <label>Qtd:</label>
          <input
            type="number"
            min="1"
            className="pl-2 rounded-md bg-stone-300 w-16 h-7 text-stone-700"
          />
        </div>

        <button
          value={addItem}
          onClick={handleClick}
          className="pl-2 pr-2 rounded-md shadow-md bg-stone-700 hover:bg-stone-500 duration-200"
        >
          Adicionar
        </button>
      </div>
    </form>
  )
}