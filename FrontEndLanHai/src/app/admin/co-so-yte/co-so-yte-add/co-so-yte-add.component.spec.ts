import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoYteAddComponent } from './co-so-yte-add.component';

describe('CoSoYteAddComponent', () => {
  let component: CoSoYteAddComponent;
  let fixture: ComponentFixture<CoSoYteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoYteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoYteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
