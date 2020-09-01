import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModalPopupComponent } from './update-modal-popup.component';

describe('UpdateModalPopupComponent', () => {
  let component: UpdateModalPopupComponent;
  let fixture: ComponentFixture<UpdateModalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateModalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
