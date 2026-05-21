import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HealthRecord } from '../../../core/models/health-record.model';

export interface TimelineDialogData {
  mode: 'add' | 'edit',
  record?: HealthRecord
}

@Component({
  selector: 'app-add-timeline-dialog',
  imports: [FormsModule, MatDialogActions,
    MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule,
    ReactiveFormsModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './add-timeline-dialog.html',
  styleUrl: './add-timeline-dialog.scss',
})
export class AddTimelineDialog implements OnInit{

  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<AddTimelineDialog>);
  data: TimelineDialogData = inject(MAT_DIALOG_DATA, {optional: true}) ??  { mode: 'add'}

  isEdit = this.data.mode === 'edit';

  form = this.fb.group({
    type: ['VACCINATION', Validators.required],
    date: ['', Validators.required],
    description: ['', Validators.required],
    doctor: [''],
    dose: [''],
    outcome: [''],
  })

  ngOnInit(): void {
    if (this.isEdit && this.data.record) {
      const r = this.data.record;
      this.form.patchValue({
        type: r.healthEventType,
        date: r.date,
        description: r.description,
        doctor: r.doctor ?? '',
        dose: r.dose ?? '',
        outcome: r.outcome ?? ''
      })
    }
  }

  save() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.dialogRef.close({
        ...this.form.value, _mode: this.data.mode, _record: this.data.record
      })
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
