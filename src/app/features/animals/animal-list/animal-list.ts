import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { AnimalStatus } from '../../../core/models/animal';
import { AnimalService } from  '../../../core/services/animal';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-animal-list',
  imports: [CommonModule, RouterLink, FormsModule, MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule,
      MatSelectModule, MatPaginatorModule,
    MatChipsModule, MatIcon
  ],
  templateUrl: './animal-list.html',

  styleUrl: './animal-list.scss',
})
export class AnimalList implements OnInit {
  private service = inject(AnimalService);
  private dialog = inject(MatDialog);
  private snack = inject(MatSnackBar);

  readonly statuses: AnimalStatus[] = ['ACTIVE', 'PREGNANT', 'LACTATING', 'SICK', 'DEAD', 'SOLD', 'DRY'];

  search = signal('');
  statusFilter = signal<AnimalStatus | 'ALL'>('ALL');
  breedFilter = signal<string>('ALL');
  pageIndex = signal(0);
  pageSize = signal(6);

  animals = this.service.animals;

  breeds = computed(() => Array.from(new Set(this.animals().map(a => a.breed))).sort());

  filtered = computed(() => {
    const q = this.search().trim().toLowerCase();
    const status = this.statusFilter();
    const breed = this.breedFilter();

    return this.animals().filter(a => {
      if(status !== 'ALL' && a.status !== status) return false;
      if(breed !== 'ALL' && a.breed !== breed) return false;
      if(q && (!a.tagNumber.toLowerCase().includes(q) ||
              a.breed.toLowerCase().includes(q) ||
              (a.owner ?? '').toLowerCase().includes(q) ||
              (a.shed ?? '').toLowerCase().includes(q))) return false;
      return true;
    });
  });

  paged = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    return this.filtered().slice(start, start + this.pageSize());
  });

  ngOnInit() {
    this.service.loadAnimals();
  }

  onPage(e: PageEvent){
    this.pageIndex.set(e.pageIndex);
    this.pageSize.set(e.pageSize);
  }

  resetFilters() {
    this.search.set('');
    this.statusFilter.set('ALL');
    this.breedFilter.set('ALL');
    this.pageIndex.set(0);
  }

  openAddDialog(){

  }
}