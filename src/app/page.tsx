import Calendar from "@/components/Calendar/Calendar";


export default function Home() {
  return (
    <>
      <article className="w-[85%] h-full flex justify-center  items-center overflow-hidden bg-slate-800">
        <section className="w-[90%] h-[80%] flex justify-center items-center overflow-hidden">
          <Calendar />
        </section>
      </article>
    </>
  );
}
