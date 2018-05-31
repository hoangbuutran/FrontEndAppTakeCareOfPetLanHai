import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoYteComponent } from './co-so-yte.component';

describe('CoSoYteComponent', () => {
  let component: CoSoYteComponent;
  let fixture: ComponentFixture<CoSoYteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoYteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoYteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
