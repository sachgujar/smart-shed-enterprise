export type  HealthEventType = | 'VACCINATION' | 'TREATMENT' | 'CHECKUP' | 'INSEMINATION' | 'PREGNANCY_CONFIRMED' | 'BIRTH' | 'CALF_DEATH' | 'DEATH' | 'MILK_RECORD';


export interface HealthRecord {
  id: number;
  animalId: number;
  healthEventType: HealthEventType;
  date: string;
  description: string;
  doctor?: string;
  dose?: string;
  outcome?: string;
}
