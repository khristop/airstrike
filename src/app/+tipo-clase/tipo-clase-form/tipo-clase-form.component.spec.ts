import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoClaseFormComponent } from './tipo-clase-form.component';

describe('TipoClaseFormComponent', () => {
  let component: TipoClaseFormComponent;
  let fixture: ComponentFixture<TipoClaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoClaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoClaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
