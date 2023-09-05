'use client'

import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import TaskWave from "./imp";

const Home = () => {
  const[isTaskVisible,setIsTaskVisible] = useState(false);
  const toggleTaskWaveVisibility = () => {
    setIsTaskVisible(!isTaskVisible);
  };
  const{data:session} = useSession();
  return (
    <div>
      {session?.user ? 
      (
        <div className="w-full">
          {isTaskVisible ? <> <button onClick={toggleTaskWaveVisibility} className='back'>
            Back
          </button> <TaskWave /> </> : 
            <div>
              <h1 className="welcome_text text-center">Welcome to Task Wave!</h1>
              <button onClick={toggleTaskWaveVisibility} className='create_task'>
                + Create Task
              </button>
            </div>}
        </div>
      ) : ( 
      <div>
          <section className='w-full flex-center flex-col' >
            <h1 className='head_text text-center'>
              Organize & Prioritize
              <br className='max-md:hidden' />
              <span className='violet_gradient justify-center text-center'>Effortlessly Organize Your Day with Task Wave</span>
            </h1>
            <p className='desc'>
              TaskWave is your Passport to a Productive Tomorrow – Surf through Tasks with Ease
          </p>
          </section>
          <br/>
          <div className="flex justify-center items-center">
              <Link href='/' className="get_started">
                Get Started
              </Link>
            </div>
          </div>
          
        )}
    </div>
  )}
export default Home