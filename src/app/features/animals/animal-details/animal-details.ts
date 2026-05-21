import { Component, computed, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { HealthTimeline } from '../health-timeline/health-timeline';
import { AnimalService } from '../../../core/services/animal';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { toSignal } from '@angular/core/rxjs-interop';
import { Animal } from '../../../core/models/animal';
import { AddAnimalDialog } from '../add-animal-dialog/add-animal-dialog';

@Component({
  selector: 'app-animal-details',
  imports: [CommonModule, RouterLink, MatTabsModule,
    MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, HealthTimeline
  ],
  templateUrl: './animal-details.html',
  styleUrl: './animal-details.scss',
})
export class AnimalDetails {
  private route = inject(ActivatedRoute);
  private service = inject(AnimalService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  private id = toSignal(
    this.route.paramMap,
    { initialValue: this.route.snapshot.paramMap }
  );

  animalId = computed(() => Number(this.id().get('id')));
  animals = this.service.animals;

  animal = computed(() => this.service.getAnimalById(this.animalId()));

  constructor() {
    effect(() =>{
       const id = this.animalId();
        if(id) {

        }

    });
   
  }

  ngOnInit() {
    // Make sure the animal list is loaded so `getAnimalById` returns data.
console.log("Test===>",  this.animalId, this.animal)
console.log("Test===>", this.service.animals())
 console.log( this.animals)
    if(!this.service.animals().length){
      this.service.loadAnimals();
      console.log(this.animals)
    }
  }

  openEditDialog(animal: Animal) {
    const ref = this.dialog.open(AddAnimalDialog, {
      width: '600px',
      data: { mode: 'edit', animal}
    })
    ref.afterClosed().subscribe(result => {
      if(result) {
        this.service.updateAnimal(animal.animalId, result).subscribe({
          next: () => {
            this.snackBar.open('Animal updated successfully', 'OK', { duration: 3000});
            this.service.fetchAnimalById(animal.animalId).subscribe();
          },
          error: () => this.snackBar.open('Faild to update animal', 'Close', {
            duration: 3000
          })
        })
      }
    })
  }

}
