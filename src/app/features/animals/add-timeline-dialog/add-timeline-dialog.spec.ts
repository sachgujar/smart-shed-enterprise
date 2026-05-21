import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimelineDialog } from './add-timeline-dialog';

describe('AddTimelineDialog', () => {
  let component: AddTimelineDialog;
  let fixture: ComponentFixture<AddTimelineDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTimelineDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTimelineDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
