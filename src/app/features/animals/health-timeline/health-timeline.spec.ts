import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTimeline } from './health-timeline';

describe('HealthTimeline', () => {
  let component: HealthTimeline;
  let fixture: ComponentFixture<HealthTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthTimeline],
    }).compileComponents();

    fixture = TestBed.createComponent(HealthTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
