import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'lib-button',
  imports: [MatButtonModule, MatIconModule],
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {   
  @Input() label = '';                    // Texto del botón
  @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';
  @Input() type: 'button' | 'submit' = 'button';  // Tipo de botón (para formularios)
  @Input() disabled = false;             // Deshabilitar opción
  @Input() icon?: string;                         // Ícono opcional (Material Icons)
  @Input() iconPosition: 'left' | 'right' | 'center' = 'center'; // Posición del ícono

  @Output() clicked = new EventEmitter<void>();   // Evento click

  onClick() {
    this.clicked.emit();
  }
}
