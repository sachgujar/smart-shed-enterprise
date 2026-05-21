import { Component, computed, effect, inject, input } from '@angular/core';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { AnimalService } from '../../../core/services/animal';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HealthEventType, HealthRecord } from '../../../core/models/health-record.model';
import { AddTimelineDialog } from '../add-timeline-dialog/add-timeline-dialog';

@Component({
  selector: 'app-health-timeline',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './health-timeline.html',
  styleUrl: './health-timeline.scss',
})
export class HealthTimeline {
  private service = inject(AnimalService);
  private dialog = inject(MatDialog);

  animalId = input.required<number>();

  records = computed(() => this.service.getHealthRecords(this.animalId()));

  constructor() {
    effect(() => {
      const id = this.animalId();
      if (id) this.service.fetchHealthRecords(id).subscribe();
    })
  }

  iconFor(type: HealthEventType): string {
    switch (type) {
      case 'VACCINATION': return 'vaccine';
      case 'TREATMENT': return 'healing';
      case 'CHECKUP': return 'medical_services';
      case 'INSEMINATION': return 'science';
      case 'PREGNANCY_CONFIRMED': return 'pregnant_women';
      case 'BIRTH': return 'child_friendly';
      case 'CALF_DEATH': return 'heart_brocken';
      case 'DEATH': return 'sentiment_very_dissatisfied';
      case 'MILK_RECORD': return 'water_drop';
      default: return 'event';
    }
  }

  openAddDialog() {
    const ref = this.dialog.open(AddTimelineDialog, {
      width: '420px', data: {
        mode: 'add'
      }
    });

    ref.afterClosed().subscribe(result => {
      if (result) {
        this.service.addHealthRecord(this.animalId(), {
          healthEventType: result.type,
          date: result.date,
          description: result.description,
          doctor: result.doctor,
          dose: result.dose,
          outcome: result.outcome
        }).subscribe();
      }
    })
  }

  openEditDialog(record: HealthRecord) {
    const ref = this.dialog.open(AddTimelineDialog, {
      width: '420px', data: {
        mode: 'edit', record
      }
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.service.updateHealthRecord({
          ...result._record,
          healthEventType: result.type,
          date: result.date,
          description: result.description,
          doctor: result.doctor,
          dose: result.dose,
          outcome: result.outcome

        }).subscribe();
      }
    })
  }
}
