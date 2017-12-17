import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
          opacity: 0
        })),
      state('final', style({
          opacity: 1
        })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000)),
    ])
  ]
})
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'inicial';

  lat: number = 37.313701;
  lng: number = -6.8401699;
  zoom: number = 19;
  lugares = null;
  lugaresPayedRandom = null;
  showError = null;

   constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares().subscribe(
      lugares => {
        this.lugares = lugares;
        var me = this;
        this.lugares = Object.keys(this.lugares).map(function(key) {
          return me.lugares[key];
        });
        this.state = 'final';
      },
      error => {
        this.showError = error.statusText;
      }
    );
    lugaresService.getLugaresPayedRandom().subscribe(lugares => {
         this.lugaresPayedRandom = lugares;
         return this.lugaresPayedRandom;
       }, error => {
         this.showError = error.statusText;
       });
   }
}
