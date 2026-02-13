import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavMenu } from '../../shared/ui/sidenav/sidenav-menu';
import { NavSectionModelVM } from '@postobon-solutions/client';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SidenavMenu],
  standalone: true,
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

  private readonly router = inject(Router);

  navSections: NavSectionModelVM[] = [
    {
      sectionTitle: 'Caja',
      baseRoute: 'caja',
      iconSection: 'attach_money',
      navItems: [
        {
          title: 'Gestion',
          route: 'gestion',
          icon: 'fact_check'
        },
        {
          title: 'Trazabilidad',
          route: 'trazabilidad',
          icon: 'route'
        }
      ]
    },
    {
      sectionTitle: 'Distribucion',
      baseRoute: 'distribucion',
      iconSection: 'local_shipping',
      navItems: [
        {
          title: 'Pre-autorizados',
          route: 'pre-autorizados/gestion',
          icon: 'conveyor_belt'
        },
        {
          title: 'Hand Held',
          route: 'hand-held/inventario',
          icon: 'phonelink_setup'
        },
        {
          title: 'Apertura',
          route: 'apertura/inventario',
          icon: 'app_registration'
        }
      ]
    }
  ];

  routeToNavigate(route: string) {
    console.log('Navigating to:', route);
    this.router.navigate([route]);
  }
}