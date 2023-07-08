"use client"

import { Table } from '@nextui-org/react'
export default function Home() {
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
          <input id='amount' className='pl-1 rounded-md bg-stone-100 border-4 border-blue-200 w-12' />
        </div>
        <button className='w-8 h-8 rounded-md bg-blue-400 text-stone-200'>+</button>
      </div>
    </div>
    <div className='grid place-items-center'>
      <Table
        aria-label="Table test"
        css={{
          height: "auto",
          minWidth: "1000px",
        }}
      >
        <Table.Header>
          <Table.Column>ITEM</Table.Column>
          <Table.Column>QUANTITY</Table.Column>
          <Table.Column>STATUS</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>MOUSE</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>OK</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>AXE</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>DAMAGED</Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>CAP</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>OK</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>SUNGLASSES</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>OK</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </main>
  )
}
