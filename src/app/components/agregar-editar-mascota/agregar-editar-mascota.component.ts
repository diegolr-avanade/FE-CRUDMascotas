import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _mascotaService: MascotaService,
    private _snackBar: MatSnackBar,
    private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      color: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarMascota() {
    // Armamos objeto
    const mascota: Mascota = {
      nombre: this.form.value.nombre,
      edad: this.form.value.edad,
      raza: this.form.value.raza,
      color: this.form.value.color,
      peso: this.form.value.peso
    }

    // Enviamos objeto al back-end
    this._mascotaService.addMascota(mascota).subscribe(data => {
      console.log(data);
      this.mensaje_exito();
      this.router.navigate(['/listMascotas']);
    }
    )
  }

  mensaje_exito() {
    this._snackBar.open("La mascota fue registrada con éxito", '', {
      duration: 4000,
      horizontalPosition: 'left',
    });
  }

}
