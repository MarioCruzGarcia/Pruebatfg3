import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioEspecificoComponent } from './espacio-especifico.component';

describe('EspacioEspecificoComponent', () => {
  let component: EspacioEspecificoComponent;
  let fixture: ComponentFixture<EspacioEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspacioEspecificoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspacioEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
