'use client'

import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import TaskWave from "./imp";
import Image from "next/image";

const Home = () => {
  const[isTaskVisible,setIsTaskVisible] = useState(false);
  const toggleTaskWaveVisibility = () => {
    setIsTaskVisible(!isTaskVisible);
  };
  const{data:session} = useSession();
  return (
    <div className="flex flex-col items-center justify-center w-full md:px-16">
      {session?.user ? 
      (
        <div className="w-full">
          {isTaskVisible ? <div><a onClick={toggleTaskWaveVisibility} className='back'>
            back
          </a><TaskWave /> </div> : 
            <div className="flex justify-center items-center flex-col shadow-xl shadow-violet-300 px-10 py-10" >
              <h1 className="welcome_text text-center text-6xl font-extrabold text-black">Welcome to Task Wave!</h1>
              <Image src="/assests/welpage.png" alt="Task Wave" width={300} height={300}/>
              <button onClick={toggleTaskWaveVisibility} className="create_task font-semibold px-8 py-4 hover:bg-opacity-80">
                + Create Task
              </button>
            </div>}
        </div>
      ) : ( 
      <div>
          <section className='w-full flex-center flex-col py-10 space-y-12' >
            <h1 className='head_text text-center caret-transparent'>
              Organize & Prioritize
              <br className='max-md:hidden' />
              <span className='violet_gradient mt-8 justify-center text-center'>Effortlessly Organize Your Day with Task Wave</span>
            </h1>
            <p className='desc '>
              TaskWave is your Passport to a Productive Tomorrow – Surf through Tasks with Ease
          </p>
          <div className="flex justify-center items-center">
              <Link href='/' className="get_started">
                Get Started
              </Link>
            </div>
          </section>
          </div>
          
        )}
    </div>
  )}
export default Home