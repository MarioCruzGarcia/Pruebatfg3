import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosEditComponent } from './espacios-edit.component';

describe('EspaciosEditComponent', () => {
  let component: EspaciosEditComponent;
  let fixture: ComponentFixture<EspaciosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaciosEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspaciosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
