import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <header className='w-full h-[10%] flex items-center justify-between px-24'>
        <nav className='flex items-center gap-8'>
            <div className='flex items-center justify-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className='bg-white rounded-md'>
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
                <a href="#" className='font-bold text-md'>Taxonomy</a>
            </div>
            <div className='flex items-center gap-6 text-sm text-muted-foreground'>
                <Button variant={"link"} className='text-sm text-muted-foreground'>Money</Button>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
                <a href="#">Documentation</a>
            </div>
            
        </nav>
        <div>
            <Button variant={'secondary'}>Login</Button>
        </div>
    </header>
  )
}

export default Navbar