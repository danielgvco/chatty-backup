import { FC } from 'react'
import { MessagesSquare, SendHorizonal } from 'lucide-react'
import { Button } from './ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Chat: FC = () => {
    return (
        <Accordion type="single" collapsible className='fixed right-4 bottom-4'>
            <AccordionItem value="item-1">
                <AccordionContent className='h-[27rem] w-[20rem] bg-white p-4'>
                    <div className='bg-gray-200 h-[22rem] rounded mb-2'></div>
                    <div className='flex justify-between'>
                        <form><input type='text' id='message' name='write message' className='border-2 rounded h-10 w-[14rem]'/></form>
                        <Button><SendHorizonal /></Button>
                    </div>
                </AccordionContent>
                <Button asChild className='h-12'><AccordionTrigger><div className='mr-2'><MessagesSquare /></div></AccordionTrigger></Button>
            </AccordionItem>
        </Accordion>
    )
}

export default Chat