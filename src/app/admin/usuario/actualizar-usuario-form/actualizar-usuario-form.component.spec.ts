import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUsuarioFormComponent } from './actualizar-usuario-form.component';

describe('ActualizarUsuarioFormComponent', () => {
  let component: ActualizarUsuarioFormComponent;
  let fixture: ComponentFixture<ActualizarUsuarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarUsuarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarUsuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
