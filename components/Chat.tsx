import { FC } from 'react'
import { MessagesSquare, SendHorizonal } from 'lucide-react'
import { Button } from './ui/button'
import ChatHeader from './ChatHeader'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Chat: FC = () => {
    return (
        <Accordion type="single" collapsible className='relative bg-white z-40 shadow'>
            <AccordionItem value="item-1">
                <AccordionTrigger className='px-6 border-b border-zinc-300'>
                    <ChatHeader />
                </AccordionTrigger>
                <AccordionContent className='h-[27rem] w-[20rem] bg-white p-4'>
                    <div className='bg-gray-200 h-[22rem] rounded mb-2'></div>
                    <div className='flex justify-between'>
                        <form><input type='text' id='message' name='write message' className='border-2 rounded h-10 w-[14rem]' /></form>
                        <Button><SendHorizonal /></Button>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Chat