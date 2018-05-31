import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoYteEditComponent } from './co-so-yte-edit.component';

describe('CoSoYteEditComponent', () => {
  let component: CoSoYteEditComponent;
  let fixture: ComponentFixture<CoSoYteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoYteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoYteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
