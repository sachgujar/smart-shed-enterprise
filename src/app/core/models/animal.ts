export type  AnimalStatus = 'ACTIVE' | 'PREGNANT' | 'LACTATING' | 'SICK' | 'DEAD' | 'SOLD' | 'DRY';
export type AnimalGender = 'MALE' | 'FEMALE';

export interface Animal {
  id: number;
  tagNumber: string;
  name?: string;
  gender: AnimalGender;
  breed: string;
  dob: string;
  weightKg: number;
  photoUrl?: string;
  status: AnimalStatus;

  // Lineage
  motherTag?: string;
  fatherTag?: string;

  // Quick-look fields
  lastHeatDate?: string;
  lastCalvingDate?: string;
  lastVaccinationDate?: string;
  nextVaccinationDate?: string;
  expectedCalvingDate?: string;
  lastInseminationDate?: string;
  dailyMilkYieldLiters?: number;


  // location / ownership
  shed?: string;
  owner?: string;
  notes?: string;


}
