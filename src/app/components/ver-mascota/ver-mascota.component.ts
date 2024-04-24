import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit {

  id : number;
  mascota! : Mascota;
  loading : Boolean = false;

  constructor(private _mascotaService : MascotaService, private aRoute : ActivatedRoute) {
    this.id = Number(aRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.obtenerMascota();
  }

  obtenerMascota()
  {
    this.loading = true;
    this._mascotaService.getMascota(this.id).subscribe(data=> 
      {
        this.loading = false;
        this.mascota = data;
      }
    );
    
  }

}
