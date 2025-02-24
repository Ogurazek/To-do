'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { House } from 'lucide-react';


export default function Navbar() {

    const path = usePathname()
    return (
        <>
            <nav className="w-60 h-screen  p-3 flex flex-col border-r-[1px] bg-[#F8F8F8] border-gray-200">
                <header className="w-full h-14 font-bold bg-violet-400 rounded-md flex items-center justify-center mb-4">
                    <span className="text-lg">To-Do by Ogurazek 😎</span>
                </header>
                <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
                {/* Este contenido podría ser un componente aparte */}
                <article className="w-full h-full flex flex-col items-center gap-3 overflow-auto">
                    <Link href="/" className="w-full">
                        <article className={`${path === "/" ? "bg-black text-white" : ""} w-full h-10 transition-colors duration-300 rounded-[8px] flex p-4 items-center cursor-pointer hover:bg-black hover:text-white gap-3`}>
                            <House size={24} />
                            <span>Inicio</span>
                        </article>
                    </Link>
                    <Link href="/introduccion" className="w-full">
                        <article className={`${path === "/introduccion" ? "bg-black text-white" : ""} w-full h-10 transition-colors duration-300 rounded-[8px] flex p-4 items-center cursor-pointer hover:bg-black hover:text-white gap-3`}>
                            <House size={24} />
                            <span>Inicio</span>
                        </article>
                    </Link>
                    <Link href="/semanal" className="w-full">
                        <article className={`${path === "/semanal" ? "bg-black text-white" : ""} w-full h-10 transition-colors duration-300 rounded-[8px] flex p-4 items-center cursor-pointer hover:bg-black hover:text-white gap-3`}>
                            <House size={24} />
                            <span>Inicio</span>
                        </article>
                    </Link>

                </article>
                {/* Este contenido podría ser un componente aparte */}
            </nav>
        </>
    )
}