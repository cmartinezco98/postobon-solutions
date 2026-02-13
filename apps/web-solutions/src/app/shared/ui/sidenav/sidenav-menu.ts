import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavSectionModelVM } from '@postobon-solutions/client';

@Component({
  selector: 'app-sidenav-menu',
  imports: [
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './sidenav-menu.html',
  styles: `
.nav-icon{
display:flex;
align-items:center;
gap:8px;
}
`,
  standalone: true,
})
export class SidenavMenu {

  @Input({ required: true }) navSections: NavSectionModelVM[] = [];
  @Output() navigate = new EventEmitter<string>();

  readonly panel = signal('');

  public setPanel(panelName: string) {
    this.panel.set(panelName);
  }
}
