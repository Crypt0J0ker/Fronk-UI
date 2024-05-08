import React from 'react'
//import { ICard } from "../MainPage/MainPage";

interface ICard {
  id: number
  value: number
  checked: boolean
}

const card = (item: ICard) => (
  <div key={item.id} data-name="card" className="w-32 mx-3">
    <div
      className={`border ${
        item.checked ? 'border-fronk-green' : 'border-fronk-orange'
      }`}
    >
      <div
        className={`mt-3 mx-3 flex flex-col justify-center items-center ${
          item.checked ? 'bg-fronk-green' : 'bg-fronk-orange'
        }`}
      >
        <p className="text-center text-6xl font-semibold italic mt-5 px-3">
          FXP
        </p>
        <p className="text-xl my-1">+{item.value}</p>
      </div>
      <div className="text-center">
        <p className="text-2xl my-1">
          {item.checked ? 'done' : `day ${item.id}`}
        </p>
      </div>
    </div>
  </div>
)

const CardsList = ({ list }: { list: ICard[] }) => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-600 px-3.5 py-4">
      <div className="w-full flex justify-between px-3 mb-4">
        <h1>Sign in for a week straight, watch you prizes escalate</h1>
        <button className="bg-fronk-orange hover:bg-fronk-orange/50 text-2xl uppercase w-1/6 px-2">
          switch
        </button>
      </div>
      {/* grid grid-rows-4 grid-flow-col gap-4 */}
      {/* <div className="grid grid-cols-7 gap-4">{list.map((item) => card(item))}</div> */}
      <div className="flex justify-between w-full mt-3 overflow-x-auto">
        {list.map(item => card(item))}
      </div>
      <button className="w-5/12 font-archivo text-5xl font-light border border-fronk-orange hover:bg-fronk-orange uppercase py-2.5 mt-10 mb-5">
        Claim
      </button>
    </div>
  )
}

export default CardsList
