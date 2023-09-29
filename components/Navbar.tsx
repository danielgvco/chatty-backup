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
        <nav className='flex h-14 shadow-md top-0 px-4 lg:px-8 items-center justify-between'>
            <div>Logo</div>
            <div className='hidden lg:flex space-x-2 items-center'>
                <Button variant='ghost'>Home</Button>
                <Button variant='ghost'>Pricing</Button>
                <Button variant='ghost'>Contact</Button>
                <Button variant='outline' className='shadow' ><LayoutDashboard className='mr-2' />Dashboard</Button>
            </div>
            <div className='lg:hidden flex items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline'><Menu /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Home</DropdownMenuItem>
                        <DropdownMenuItem>Pricing</DropdownMenuItem>
                        <DropdownMenuItem>Contact</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Button><LayoutDashboard className='mr-2' />Dashboard</Button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}
