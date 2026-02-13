import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'lib-select',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, CommonModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  standalone: true,
})
export class Select {
  @Input() control!: FormControl;
  @Input() label?: string = '';
  @Input() options: { value: any, label: string }[] = [];

}
