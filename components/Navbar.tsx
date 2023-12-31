import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, LayoutDashboard } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
    return (
        <nav className='flex fixed h-14 w-screen top-0 px-4 lg:px-8 items-center justify-between backdrop-blur'>
            <div>Logo</div>
            <div className='hidden lg:flex space-x-2 items-center'>
                <Button variant='ghost' asChild><Link href='#home' className='font-[700]'>Home</Link></Button>
                <Button variant='ghost' asChild><Link href='#pricing' className='font-[700]'>Pricing</Link></Button>
                <Button variant='ghost' asChild><Link href='#contact' className='font-[700]'>Contact</Link></Button>
                <Button variant='outline' className='font-[700]' ><LayoutDashboard className='mr-2' />Dashboard</Button>
            </div>
            <div className='lg:hidden flex items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline'><Menu /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem asChild><Link href='#home'>Home</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href='#pricing'>Pricing</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href='#contact'>Contact</Link></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild><Button><LayoutDashboard className='mr-2' />Dashboard</Button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}
