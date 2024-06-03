import { Component, ViewEncapsulation } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  encapsulation: ViewEncapsulation.None // Deshabilitar la encapsulación de estilo
})
export class CalendarioComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: [],
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventChange: this.handleEventChange.bind(this)
  };

  constructor(private toastr: ToastrService) {}

  handleDateSelect(selectInfo: any) {
    const title = prompt('Introduce el título del evento:');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: String(new Date().getTime()),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
      this.toastr.success('Evento añadido', 'Éxito');
    }
  }

  handleEventClick(clickInfo: any) {
    if (confirm(`¿Seguro que quieres eliminar el evento '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
      this.toastr.info('Evento eliminado', 'Información');
    }
  }

  handleEventChange(changeInfo: any) {
    console.log('Evento actualizado:', changeInfo.event);
    this.toastr.success('Evento actualizado', 'Éxito');
  }
}
