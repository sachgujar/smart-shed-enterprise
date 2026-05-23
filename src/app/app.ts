import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from './core/services/auth';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('smart-shed-enterprise');
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);
  auth = inject(AuthService);
  isHandset = toSignal(this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(map(result => result.matches)),
  { initialValue: false}
  );

  /** Hide the shell ( sidenav + toobar) on auth pages like /login. */
  isAuthPage = toSignal(this.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map(() => this.router.url.startsWith('/login')),
    startWith(this.router.url.startsWith('/login'))


  ), 
  { initialValue: false }
);
  sidenavOpen = signal(true);

  toggleSidenav() {
    this.sidenavOpen.update(open => !open);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
