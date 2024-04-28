import React from 'react'
import { Button } from './ui/button'
import MobileNav from './MobileNav'
import { links } from '@/constants'
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className='sticky top-0 left-0 flex flex-1 justify-between items-center max-md:w-full'>
      <div className='bg-[#ffffff33] backdrop-blur-md justify-between flex items-center w-full px-4  shadow-sm'>
        <div className='w-[100px] h-[50px]  flex justify-center items-center'>
          <h2 className='font-bold'>E-<span className='text-orange-500'>buy</span></h2>
        </div>
        <div className="w-full flex justify-center gap-[10px] items-center max-md:hidden">
          {links.map((link) => (
            <Link key={link.name} href={link.path}>{link.name}</Link>
          ))}
        </div>
        <div className="flex items-center">
          <div className='w-fit flex justify-center items-center gap-3 max-md:hidden'>
            <Button>Sign-in</Button>
            <Button>Sign-up</Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
