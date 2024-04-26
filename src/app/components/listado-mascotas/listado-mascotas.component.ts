import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})

export class ListadoMascotasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>();
  loading: boolean = false;

  constructor(private _snackBar: MatSnackBar, private _mascotaService: MascotaService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerMascotas() {
    this.loading = true;
    this._mascotaService.getMascotas().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    });
  }

  eliminarMascota(id: number) {
    this.loading = true;
    this._mascotaService.getMascota(id).subscribe(mascota => {
      if (confirm("¿Estás seguro de que quieres eliminar a " + mascota.nombre + "?\nEste cambio es irreversible.")) {
        this._mascotaService.deleteMascota(id).subscribe(() => {
          this.mensaje_exito();
          this.loading = false;
          this.obtenerMascotas();
        })
      }
      else {
        this.loading = false;
      }
    });

  }

  mensaje_exito() {
    this._snackBar.open("La mascota fue eliminada con éxito", '', {
      duration: 4000,
      horizontalPosition: 'left',
    });
  }

}
