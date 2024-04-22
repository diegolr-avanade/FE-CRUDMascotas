import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';

const listMascotas: Mascota[] = [
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
export class ListadoMascotasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    
  }

}
