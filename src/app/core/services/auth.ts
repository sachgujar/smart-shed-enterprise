import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface User {
  username: string;
  displayName: string;
  role: 'ADMIN' | 'VET' | 'VIEWER'
}

const STORAGE_KEY = 'sse.user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private _user = signal<User | null>(null);

  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => this.user() !== null);

  constructor() {
    // Rehydrate from localStorage on the browser after DI is ready
    if(this.isBrowser) {
      const stored = this.loadFromStorage();
      if(stored) {
        this._user.set(stored);
      }
    }
  }

  login(username: string, password: string): Observable< User | null> {
    const dummyUsers: Record<string, {password: string, user: User}> = {
      admin: { password: 'admin', user: { username: 'admin', displayName: 'Farm Admin', role: 'ADMIN' } },
      vet: { password: 'vet', user: { username: 'vet', displayName: 'Dr. Patil', role: 'VET' } },
      user: { password: 'user', user: { username: 'user', displayName: 'John Doe', role: 'VIEWER' } }
    };

    const match = dummyUsers[username.toLowerCase()];
    const ok = match && match.password === password;
    const result = ok ? match.user : null;

    if(result) {
      this._user.set(result);
      this.persist(result);
    }

    return of(result).pipe(delay(1000));
  }

  logout() {
    this._user.set(null);
    if( this.isBrowser) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  private loadFromStorage(): User | null {
    if(!isPlatformBrowser(this.platformId)) return null;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) as User : null;
    } catch {
      return null;
    }
  }

  private persist(user: User) {
    if(this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  }

}
