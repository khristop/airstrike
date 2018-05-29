import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuarioFormComponent } from './registro-usuario-form.component';

describe('RegistroUsuarioFormComponent', () => {
  let component: RegistroUsuarioFormComponent;
  let fixture: ComponentFixture<RegistroUsuarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
