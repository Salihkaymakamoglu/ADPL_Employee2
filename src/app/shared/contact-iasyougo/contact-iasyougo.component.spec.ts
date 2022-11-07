import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIasyougoComponent } from './contact-iasyougo.component';

describe('ContactIasyougoComponent', () => {
  let component: ContactIasyougoComponent;
  let fixture: ComponentFixture<ContactIasyougoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactIasyougoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIasyougoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
