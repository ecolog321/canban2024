import { CalendarCells } from "./CalendarCells/calendarCells";
import { CalendarDays } from "./CalendarDays/CalendarDays";

export function Calendarcontent() {
    return (
        <div className="calendar__content">
            <CalendarDays/>
            <CalendarCells/>
        </div>
        
    )
}