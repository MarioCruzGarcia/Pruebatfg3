import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasEventoEditComponent } from './categorias-evento-edit.component';

describe('CategoriasEventoEditComponent', () => {
  let component: CategoriasEventoEditComponent;
  let fixture: ComponentFixture<CategoriasEventoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasEventoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasEventoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
