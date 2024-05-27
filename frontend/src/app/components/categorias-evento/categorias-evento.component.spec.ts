import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasEventoComponent } from './categorias-evento.component';

describe('CategoriasEventoComponent', () => {
  let component: CategoriasEventoComponent;
  let fixture: ComponentFixture<CategoriasEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
