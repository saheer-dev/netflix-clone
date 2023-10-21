import React from 'react'
import { DotsThree, List, MagnifyingGlass } from "@phosphor-icons/react";
import logo from "../assets/pngegg.png"


export default function NavBar() {
  return (
    <div className='w-[100vw] h-[4rem]  bg-black p-2'>

        <div className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
         <List size={32} color="#fcfcfc" weight="bold" />
          <img className='w-[7rem]' src={logo} alt="" />
            </div>

            <div className='flex gap-3'>
             <MagnifyingGlass size={20} color="#fcfcfc" weight="bold" />
              <DotsThree size={22} color="#fcfcfc" weight="bold" />
                </div>
        </div>

        

        
      
    </div>
  )
}
