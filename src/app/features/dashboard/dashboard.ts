import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { AnimalService } from '../../core/services/animal';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private service = inject(AnimalService);

  total = this.service.totalCount;
  statusBreakdown = this.service.statusBreakdown;
  breedBreakdown = this.service.breedBreakdown;
  vaccinationDue = this.service.vaccinationDueCount;

  kpis = computed(() => {
    const s = this.statusBreakdown();
    return [
      {
        label: 'Total Animals', value: this.total(), icon: 'pets', tint: 'blue'
      },
      { label: 'pregnant', value: s.PREGNANT, icon: 'pregnant_women', tint: 'pink' },
      { label: 'Lactating', value: s.LACTATING, icon: 'water_drop', tint: 'cyan' },
      { label: 'vaccination Due', value: this.vaccinationDue(), icon: 'vaccines', tint: 'amber' },
      { label: 'sick', value: s.SICK, icon: 'sick', tint: 'red' },
      { label: 'Deceased', value: s.DEAD, icon: 'sentiment_very_dissatisfied', tint: 'gray' },

    ];
  });
  breedRows = computed(() => {
    const total = this.total() || 1;
    return Object.entries(this.breedBreakdown())
      .map(([breed, count]) => ({ breed, count, pct: Math.round((count / total) * 100) }))
      .sort((a, b) => b.count - a.count);
  });
  ngOnInit() {
    this.service.loadAnimals();
  }
}