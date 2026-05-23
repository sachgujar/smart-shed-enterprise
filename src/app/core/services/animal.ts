// import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Animal, AnimalGender, AnimalStatus } from '../models/animal';
import { HttpClient } from '@angular/common/http';
import { HealthRecord } from '../models/health-record.model';


// const API_BASE = 'http://localhost:8080/api';
const API_BASE = 'https://smart-shed-enterprise-services.onrender.com/api';

@Injectable({
  providedIn: 'root',
})

export class AnimalService {

  private http = inject(HttpClient);

  // ---- State ----
  private _animals = signal<Animal[]>([]);
  private _healthRecords = signal<Map<number, HealthRecord[]>>(new Map);

  readonly animals = this._animals.asReadonly();

  // ---- Derived selectors used by the dashboard ----


  readonly totalCount = computed(() => this._animals().length);
  
  readonly statusBreakdown = computed(() => {
    const acc: Record<AnimalStatus, number> = {
      ACTIVE: 0, PREGNANT: 0, LACTATING: 0, DRY: 0, SICK: 0, DEAD: 0, SOLD: 0
    };
    for(const a of this._animals()) acc[a.status]++;
    
    return acc;
  })

  readonly breedBreakdown = computed(() => {
    const acc: Record<string, number> = {};

    for(const a of this._animals()) {
      acc[a.breed] = (acc[a.breed] ?? 0) + 1;
    }
    return acc;
  })

   readonly vaccinationDueCount = computed(() => {
    const today = new Date().toISOString().slice(0, 10);

    return this._animals().filter(a => (a.nextVaccinationDate ?? '') <= today && a.status !== 'DEAD').length;

  })

  // ---- Animals ----

  fetchAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${API_BASE}/animals`).pipe(
      tap(animals => this._animals.set(animals ??[]))
    );
  }

  /** convenience for components that just want to trigger  a load. */
  loadAnimals() {
    this.fetchAnimals().subscribe();
  }

  fetchAnimalById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API_BASE}/animals/${id}`);  
  }

  addAnimal(animal: Partial<Animal>): Observable<Animal> {
    return this.http.post<Animal>(`${API_BASE}/animals`, animal).pipe(
      tap(newAnimal => { this._animals.set([newAnimal, ...this._animals()]) })
    );
  }

  getAnimalById(id: number): Animal | undefined {
    return this._animals().find(a => a.animalId === id);
  }

  updateAnimal(id: number, animal: Partial<Animal>): Observable<Animal> {
    return this.http.put<Animal>(`${API_BASE}/animals/${id}`, animal).pipe(
      tap(saved => {
        this._animals.update(list =>
          list.map(a => a.animalId === id ? { ...a, ...saved } : a)
        )
      })
    )
  }

  fetchHealthRecords(animalId: number) : Observable<HealthRecord[]> {
    return this.http.get<HealthRecord[]>(`${API_BASE}/animals/${animalId}/health`).pipe(
      tap(records => {
        const map = new Map(this._healthRecords());
        map.set(animalId, records ?? []);
        this._healthRecords.set(map);
      })
    )
  }


  getHealthRecords(animalId: number): HealthRecord[] {
    return this._healthRecords().get(animalId) ?? [];
  }


  addHealthRecord(
    animalId: number,
    partial: Omit<HealthRecord, 'id' | 'animalId'>
  ): Observable<HealthRecord> {
    const payload = { ...partial, animalId };
    return this.http.post<HealthRecord>(`${API_BASE}/healthrecord`, payload).pipe(
      tap(saved => {
        const map = new Map(this._healthRecords());
        const list = [saved, ...(map.get(animalId) ?? [])];
        map.set(animalId, list);
        this._healthRecords.set(map);
      })
    )
  }

  updateHealthRecord( record: HealthRecord) : Observable<HealthRecord> {
    return this.http.put<HealthRecord>(`${API_BASE}/healthrecord/${record.id}`,
      record
    ).pipe(
      tap(saved => {
        const map = new Map(this._healthRecords());
        const list = (map.get(record.animalId) ?? []).map(r => r.id === saved.id ? saved : r);
        map.set(record.animalId, list);
        this._healthRecords.set(map);

      })
    )
  }
}
