import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TableCheck, Select, DatePicker, Button } from '@postobon-solutions/ui';
@Component({
  selector: 'app-pre-authorized-list',
  imports: [TableCheck, Select, ReactiveFormsModule, DatePicker, Button],
  standalone: true,
  templateUrl: './pre-authorized-list.html',
  styleUrl: './pre-authorized-list.scss',
  
})
export class PreAuthorizedList {

  private fb = inject(FormBuilder);

  formInit = this.fb.group({
    route: [''],
    receptor: ['', Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
  });


  getControl(name: string): FormControl {
    return this.formInit.get(name) as FormControl;
  }

  routeOptions = [
    { value: 'route1', label: 'CL1801' },
    { value: 'route2', label: 'CL1802' },
    { value: 'route3', label: 'CL1803' },
    { value: 'route4', label: 'CL1804' },
    { value: 'route5', label: 'CL1805' },
    { value: 'route6', label: 'CL1806' },
    { value: 'route7', label: 'CL1807' },
    { value: 'route8', label: 'CL1808' },
    { value: 'route9', label: 'CL1809' },
    { value: 'route10', label: 'CL1810' },
  ];

  receptorOptions = [
    { value: '1', label: 'Carlos Santiago Martinez Contreras' },
    { value: '2', label: 'Vicky Gonzales Otavo' },
    { value: '3', label: 'Lorena Linares' },
    { value: '4', label: 'Stefany Mendoza' },
  ];

  public submit() {
    console.log(this.formInit.value);
  }

}