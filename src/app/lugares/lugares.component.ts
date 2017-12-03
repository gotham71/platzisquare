import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'PlatziSquare';

  lat:number = 37.313701;
  lng:number = -6.8401699;
  zoom:number = 19;
  lugares = null;
  constructor(private lugaresService: LugaresService) {
     lugaresService.getLugares()
       .valueChanges().subscribe(lugares => {
         this.lugares = lugares;
       });
  }
}
