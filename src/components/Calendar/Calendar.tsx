"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import { Trash2, Pencil } from 'lucide-react';

export default function Calendar() {
    // este estado es para un redenderizado condicional del formulario para agregar una nueva tarea
    const [formulario, setFormulario] = useState(false)
    const [eventos, setEventos] = useState([
        { id: "1", title: "JugaadasdasdadasdasdJugaadasdasdadasdasdJugaadasdasdadasdasd", start: "2025-02-25T10:30:00" },
        { id: "2", title: "Evento 2", start: "2025-02-28" },
    ]);

    const eliminarEvento = (e: any, id: any) => {
        e.stopPropagation();
        setEventos(eventos.filter((e) => e.id !== id));
    };

    const handleClickForm = () => {
        setFormulario(!formulario)
        console.log(formulario)
    }

    const renderEventContent = (eventInfo: any) => {
        return (
            <>
                <div className="w-full h-auto flex-wrap flex-col gap-y-2 flex items-center justify-center bg-slate-500 text-white px-2 py-1 rounded-md text-sm font-semibold shadow-md">
                    <div className="flex w-full text-wrap break-all justify-center items-center">
                        <p className="text-center">{eventInfo.event.title}</p>
                    </div>
                    <section className="w-full h-auto flex items-center justify-center">
                        <button
                            className="ml-2 px-2 py-1 bg-green-300 text-white rounded-md text-xs"
                            onClick={(e) => eliminarEvento(e, eventInfo.event.id)}
                        >
                            <Trash2 size={20} />
                        </button>
                        <button
                            className="ml-2 px-2 py-1 bg-green-300 text-white rounded-md text-xs"
                            onClick={(e) => eliminarEvento(e, eventInfo.event.id)}
                        >
                            <Pencil size={20} />
                        </button>
                    </section >
                </div>
            </>
        );
    };

    return (
        <div className="w-full h-full rounded-md overflow-hidden p-2 bg-[#FFFFFF] text-black">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridWeek"
                locale={esLocale}
                editable={true}
                selectable={true}
                eventResizableFromStart={true}
                height={"100%"}
                events={eventos}
                eventContent={renderEventContent}
                headerToolbar={{
                    right: "agregarEvento",
                    left: "prev,next",
                    center: "title",
                }}
                customButtons={{
                    agregarEvento: {
                        text: "➕ Agregar Evento",
                        click: handleClickForm
                    }
                }}
            />
        </div>
    );
}