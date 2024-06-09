import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  /**
   * Ponemos en el localStorage los eventos que el usuario quiera que se vean en la aplicacion
   * Los podemos recoger y tambien podemos limpiarlos
   * @param event 
   */
  saveEvent(event: any) {
    let events = this.getEventsFromLocalStorage();

    const eventExists = events.some((e: any) => e.id === event.id);

    if (!eventExists) {
      events.push(event);
      localStorage.setItem('events', JSON.stringify(events));
      console.log('Evento guardado correctamente.');
    } else {
      console.log('El evento ya está presente en el localStorage.');
    }
  }

  getEventsFromLocalStorage(): any[] {
    const eventsString = localStorage.getItem('events');
    if (eventsString) {
      return JSON.parse(eventsString);
    }
    return [];
  }

  clearEvent(eventId: number) {
    let events = this.getEventsFromLocalStorage();

    // Filtrar los eventos para excluir el evento seleccionado
    const filteredEvents = events.filter((event: any) => event.id !== eventId);

    // Actualizar el localStorage con los eventos filtrados
    localStorage.setItem('events', JSON.stringify(filteredEvents));
  }

}
