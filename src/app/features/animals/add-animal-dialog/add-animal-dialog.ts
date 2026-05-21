import { Component, inject, OnInit } from '@angular/core';
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { Animal } from '../../../core/models/animal';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


export interface AnimalDialogData {
  mode:'add' | 'edit';
  animal?: Animal;
}

@Component({
  selector: 'app-add-animal-dialog',
  imports: [MatFormField, CommonModule, ReactiveFormsModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatIconModule, MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './add-animal-dialog.html',
  styleUrl: './add-animal-dialog.scss',
})
export class AddAnimalDialog  implements OnInit {

  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<AddAnimalDialog>);
  data: AnimalDialogData = inject(MAT_DIALOG_DATA, {optional: true}) ?? {mode: 'add'};

  isEdit = this.data.mode === 'edit';

  readonly breeds = ['Murrah', 'Jafarabadi', 'Surti', 'Bhadawari', 'Mehsana', 'Nili Ravi', 'Kundi', 'Pandharpuri', 'Banni', 'Tarai', 'Gaddi', 'Bajra']
  readonly statuses = ['ACTIVE', 'PREGNANT', 'LACTATING', 'SICK', 'DEAD', 'SOLD', 'DRY'];
  readonly sheds = ['Shed-A', 'Shed-B', 'Shed-C', 'Shed-D', 'Shed-E'];

  animalForm = this.fb.group({
    tagNumber: ['', Validators.required],
    name: [''],
    gender: ['FEMALE' as 'MALE' | 'FEMALE', Validators.required],
    breed: ['Murrah', Validators.required],
    dob: ['', Validators.required],
    weightKg: [450, [Validators.required, Validators.min(50)]],
    status: ['ACTIVE' as Animal['status'], Validators.required],
    shed: ['Shed-A', Validators.required],
    owner: [''],
    motherTag: [''],
    fatherTag: [''],
    notes: [''],
    dailyMilkYieldLiters: [0],
  });

  ngOnInit() {
    if(this.isEdit && this.data.animal) {
      const a = this.data.animal;
      this.animalForm.patchValue({
        tagNumber: a.tagNumber,
        name: a.name ?? '',
        gender: a.gender,
        breed: a.breed,
        dob: a.dob,
        weightKg: a.weightKg,
        status: a.status,
        shed: a.shed ?? 'Shed-A',
        owner: a.owner ?? '',
        motherTag: a.motherTag ?? '',
        fatherTag: a.fatherTag ?? '',
        notes: a.notes ?? '',
      });
    }
  }

  save() {
    if(this.animalForm.invalid){
      this.animalForm.markAllAsTouched();
      return;
    }
    const v = this.animalForm.getRawValue();
    this.dialogRef.close({
      ...v,
      photoUrl: this.data.animal?.photoUrl ?? 'assets/images/indian-murrha.png'
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}