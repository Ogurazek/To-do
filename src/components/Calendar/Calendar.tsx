"use client"; // Importante para Next.js 15 con React 18

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";

export default function Calendar() {
    return (
        <div className="w-full h-full bg-[#FFFFFF] text-black">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridWeek"
                locale={esLocale}
                events={[
                    { title: "Jugar al basquet", date: "2025-02-25T10:30:00" },
                    { title: "Evento 2", date: "2025-02-28" },
                ]}
                eventContent={(eventInfo) => (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold shadow-md">
                        {eventInfo.event.title}
                    </div>
                )}
            />
        </div>
    );
}