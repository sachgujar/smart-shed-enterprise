// import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animal } from '../models/animal';


// const API_BASE = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})

export class AnimalService {

  // private http = inject(HttpClient);

  // ---- State ----
  private _animals = signal<Animal[]>([]);

  readonly animals = this._animals.asReadonly();


  // ---- Animals ----

  fetchAnimals(): Observable<Animal[]> {
    // return this.http.get<Animal[]>(`${API_BASE}/animals`).pipe(
    //   tap(animals => this._animals.set(animals ??[]))
    // );

    const data: Animal[] = [
      {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    },
     {
      id: 1,
      tagNumber: "BUF-123456",
      name: "Seema",
      gender: "FEMALE",
      breed: "Murrah",
      dob: "2020-10-11",
      weightKg: 245,
      photoUrl: "/assets/images/indian-murrha.png",
      status: "PREGNANT",
      motherTag: "BUF-233",
      fatherTag: "BUF-2323",
      lastHeatDate: "2023-01-15",
      lastCalvingDate: "2023-10-20",
      lastVaccinationDate: "2023-09-01",
      nextVaccinationDate: "2023-09-12",
      expectedCalvingDate: "2023-05-12",
      lastInseminationDate: "2024-06-12",
      dailyMilkYieldLiters: 20,
      shed: "Shed-A",
      owner: "Sachin",
      notes: "TEst Notes"

    }
  ];

    this._animals.set(data);

    return of(data);
  }

  /** convenience for components that just want to trigger  a load. */
  loadAnimals() {
    this.fetchAnimals().subscribe();
  }

}
