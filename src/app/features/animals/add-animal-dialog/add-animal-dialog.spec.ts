import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalDialog } from './add-animal-dialog';

describe('AddAnimalDialog', () => {
  let component: AddAnimalDialog;
  let fixture: ComponentFixture<AddAnimalDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAnimalDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAnimalDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
