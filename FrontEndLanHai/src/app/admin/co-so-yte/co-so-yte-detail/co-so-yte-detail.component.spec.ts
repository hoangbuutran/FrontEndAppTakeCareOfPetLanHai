import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoYteDetailComponent } from './co-so-yte-detail.component';

describe('CoSoYteDetailComponent', () => {
  let component: CoSoYteDetailComponent;
  let fixture: ComponentFixture<CoSoYteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoYteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoYteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
