import { Component } from '@angular/core';
import { PreAuthorizedList } from '../../ui/pre-authorized-list/pre-authorized-list';

@Component({
  selector: 'app-pre-authorized-management',
  standalone: true,
  imports: [PreAuthorizedList],
  templateUrl: './pre-authorized-management.html',
  styleUrl: './pre-authorized-management.scss',
})
export class PreAuthorizedManagement {}
