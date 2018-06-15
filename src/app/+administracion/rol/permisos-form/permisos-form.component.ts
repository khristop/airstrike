import { Component } from '@angular/core';

@Component({
  selector: 'permisos-form',
  templateUrl: './permisos-form.component.html',
  styleUrls: ['./permisos-form.component.css']
})
export class PermisosFormComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
