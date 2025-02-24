import CardIntroduccion from "./CardIntroduccion"

export default function IntroduccionPage() {
    return (
        <>
            <article className="w-[85%] h-screen  flex justify-center items-center">
                <main className="w-[80%] h-[32rem] rounded-md bg-gray-100 p-6 ">
                    <h1 className="text-2xl font-semibold">Introducción ✌️</h1>
                    <section className="w-full h-[90%] mt-3 flex flex-col gap-4">
                        <CardIntroduccion />
                        <CardIntroduccion />
                        <CardIntroduccion />
                        <CardIntroduccion />
                        <CardIntroduccion />

                    </section>
                </main>
            </article>
        </>
    )
}