import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoEspecificoComponent } from './evento-especifico.component';

describe('EventoEspecificoComponent', () => {
  let component: EventoEspecificoComponent;
  let fixture: ComponentFixture<EventoEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoEspecificoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventoEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
