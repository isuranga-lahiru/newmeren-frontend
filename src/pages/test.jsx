import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoLogoTwitter } from "react-icons/io5";


export default function TestPage() {

   const [score, setScore] = useState(50);
   const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="w-full h-full bg-amber-500 flex items-center justify-center">
      <div className="w-[450px] h-[450px] aspect-[0.9] bg-red-100 flex items-center justify-center flex-col">
        <h1 className="font-bold text-5xl">{score}</h1>
        <div className="w-full  h-[100px] flex justify-center items-center gap-4 ">
            <button className="w-[100px] bg-red-800 h-[40px] cursor-pointer"
            onClick={() => {
                    toast.error('Score decreased!');
                    setScore(score - 1);
                }}>Decrease</button>
            <button className="w-[100px] bg-green-800 h-[40px] cursor-pointer"
            onClick={() => {
                    toast.success('Score increased!');  
                    setScore(score + 1);
                 
                }           
            }>Increase</button>
            
        </div>
        <div>
          <IoLogoTwitter
            onClick={() => {
              toast('Twitter is followed!', {
                icon: <IoLogoTwitter className='text-5xl flex justify-center text-blue-700' />
              });
              // Toggle the follow state. In a real application, this would likely involve an API call to follow/unfollow the user.
              setIsFollowed(!isFollowed);
            }}
            className={isFollowed ? "text-5xl flex justify-center text-blue-700 cursor-pointer" : "text-5xl flex justify-center text-gray-500 cursor-pointer"}
          />
        </div>
      </div>
    </div>
  )
}