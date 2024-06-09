import { Component, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../../services/event.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  encapsulation: ViewEncapsulation.None // Deshabilitar la encapsulación de estilo
})
export class CalendarioComponent implements AfterViewInit {
  @ViewChild('fullcalendar') calendarComponent!: FullCalendarComponent;

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

  constructor(private toastr: ToastrService, private eventService: EventService, private router: Router) {}

  ngAfterViewInit() {
    const eventosGuardados = this.eventService.getEventsFromLocalStorage();
    if (eventosGuardados) {
      setTimeout(() => {
        this.addEventToCalendar(eventosGuardados);
      });
    }
  }  

  /**
   * Recibe el evento y lo añade al calendario
   * @param events 
   */

  addEventToCalendar(events: any[]) {
    const calendarApi = this.calendarComponent.getApi();
  
    if (events && events.length > 0) {
      events.forEach(event => {
        // Formatear la fecha y hora al formato "YYYY-MM-DDTHH:mm:ss"
        const formattedDate = formatDate(event.fecha_hora, 'yyyy-MM-dd', 'en-US');
        calendarApi.addEvent({
          id: String(event.id),
          title: event.nombre,
          start: formattedDate,
          allDay: false // Indica que el evento no dura todo el día, ya que tiene una hora específica
        });
      });
    }
  }
  
  /**
   * Para que el usuario pueda añadir cosas personales hay una opcion que si clicka dentro de la casilla
   * del dia en cuestion le sale una opcion para escribir lo que quiere
   * @param selectInfo 
   */
  handleDateSelect(selectInfo: any) {
    const title = prompt('Introduce el título del evento:');
    const calendarApi = selectInfo.view.calendar;
    console.log(selectInfo);
    calendarApi.unselect();

    if (title) {
      const event = {
        id: String(new Date().getTime()),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      };
      this.eventService.saveEvent(event);
      calendarApi.addEvent(event);
      this.toastr.success('Evento añadido', 'Éxito');
    }
  }

  handleEventClick(clickInfo: any) {
    if (confirm(`¿Seguro que quieres eliminar el evento '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
      this.eventService.clearEvent(clickInfo.event.id);
      this.toastr.info('Evento eliminado', 'Información');
    }
  }

  handleEventChange(changeInfo: any) {
    console.log('Evento actualizado:', changeInfo.event);
    this.toastr.success('Evento actualizado', 'Éxito');
  }
}
