import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'lib-date-picker',
  imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss',
  standalone: true,
})
export class DatePicker {
  @Input() controlStartDate!: FormControl<Date | null>;
  @Input() controlEndDate!: FormControl<Date | null>;
}
