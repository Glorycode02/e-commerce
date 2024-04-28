"use client"

import { AlignRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { buttons, links } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from './ui/button'

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignRight className="sm:hidden" />
            </SheetTrigger>
            <SheetContent side="left">
                <Link href='/' className="cursor-pointer lg:hidden">
                    <div className='w-full h-[50px]  flex justify-center items-center shadow-sm'>
                        <h2 className='font-bold'>E-<span className='text-orange-500'>buy</span></h2>
                    </div>
                </Link>
                <div className="w-full h-[calc(100vh-50px)] overflow-y-auto mt-[10px]">
                    {links.map((link) => {
                        const isActive = pathname === link.path;

                        return (
                            <SheetClose asChild key={link.name}>
                                <Link
                                    href={link.path}
                                    key={link.name}
                                    className={cn(
                                        'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                                        {
                                            'bg-orange-500': isActive,
                                        }
                                    )}
                                >
                                    <Image
                                        src={link.icon}
                                        alt={link.name}
                                        width={20}
                                        height={20}
                                    />
                                    <p className="font-semibold">{link.name}</p>
                                </Link>
                            </SheetClose>
                        );
                    })}
                    <div className="flex flex-col gap-4">
                        {buttons.map((button) => {
                            return (
                                <Button className={cn(
                                    'flex gap-4 items-center p-4 rounded-lg w-full max-w-60')} key={button.name}>{button.text}</Button>
                            )
                        })}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;
