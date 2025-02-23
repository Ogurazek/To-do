import CardNavbar from "./CardNavbar"


export default function Navbar() {
    return (
        <>
            <nav className="w-60 h-screen  p-3 flex flex-col border-r-[1] bg-slate-900 border-gray-400">
                <header className="w-full h-14 bg-slate-700 rounded-md flex items-center justify-center mb-4">
                    <span className="text-lg">To-Do by Ogurazek 😎</span>
                </header>
                <div className="w-full h-[2px] bg-slate-500 mb-4"></div>
                <article className="w-full h-full flex flex-col items-center gap-3 overflow-auto">
                    <CardNavbar />
                    <CardNavbar />
                </article>
            </nav>
        </>
    )
}