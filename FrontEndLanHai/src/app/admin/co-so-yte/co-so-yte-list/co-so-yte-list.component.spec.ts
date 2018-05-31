import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoYteListComponent } from './co-so-yte-list.component';

describe('CoSoYteListComponent', () => {
  let component: CoSoYteListComponent;
  let fixture: ComponentFixture<CoSoYteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoYteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoYteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
