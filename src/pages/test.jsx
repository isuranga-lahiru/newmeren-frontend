

import { useState } from 'react';

export default function TestPage() {

   const [score, setScore] = useState(50);

  return (
    <div className="w-full h-full bg-amber-500 flex items-center justify-center">
      <div className="w-[450px] h-[450px] aspect-[0.9] bg-red-100 flex items-center justify-center flex-col">
        <h1 className="font-bold text-5xl">{score}</h1>
        <div className="w-full  h-[100px] flex justify-center items-center gap-4 ">
            <button className="w-[100px] bg-red-800 h-[40px] cursor-pointer"
            onClick={() => {
                    setScore(score - 1);
                }}>Decrease</button>
            <button className="w-[100px] bg-green-800 h-[40px] cursor-pointer"
            onClick={() => {
                    setScore(score + 1);
                }           
            }>Increase</button>
        </div>
      </div>
    </div>
  )
}