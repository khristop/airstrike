import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAccionComponent } from './cliente-accion.component';

describe('ClienteAccionComponent', () => {
  let component: ClienteAccionComponent;
  let fixture: ComponentFixture<ClienteAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
