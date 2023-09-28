import React from 'react'
import { Button } from './ui/button'
import { Ghost, LayoutDashboard } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className='flex h-14 shadow-md top-0 px-12 items-center justify-between'>
        <div>Logo</div>
        <div className='flex space-x-2 items-center'>
            <Button variant='ghost'>Home</Button>
            <Button variant='ghost'>Pricing</Button>
            <Button variant='ghost'>Contact</Button>
            <Button variant='outline' className='shadow' ><LayoutDashboard className='mr-2' />Dashboard</Button>
        </div>
    </nav>
  )
}
