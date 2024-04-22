import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';

const ELEMENT_DATA: Mascota[] = [
  { nombre: 'Pancho', color: 'Amarillo', edad: 10, raza: 'Mestizo', peso: 10 },
  { nombre: 'Cuca', color: 'Blanco', edad: 8, raza: 'Bodeguero', peso: 8 },
  { nombre: 'Luna', color: 'Negro', edad: 7, raza: 'Labrador', peso: 30 },
  { nombre: 'Bella', color: 'Blanco', edad: 2, raza: 'Husky', peso: 20 },
  { nombre: 'Max', color: 'Marrón', edad: 5, raza: 'Boxer', peso: 25 },
  { nombre: 'Rocky', color: 'Gris', edad: 4, raza: 'Bulldog', peso: 24 },
  
];


@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent implements OnInit {
  displayedColumns: string[] = ['nombre','edad','raza','color','peso'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
