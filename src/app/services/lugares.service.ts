import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

@Injectable()

export class LugaresService {
  constructor(private afDB: AngularFireDatabase, private http: Http){}
  public getLugares() {
    return this.afDB.list('lugares/');
  }

  public buscarLugar(id) {
    return this.afDB.object('lugares/' + id);
    // return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
  }

  public guardarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public editarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    // maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }

  public getLugar(id) {
    return this.afDB.object('lugares/' + id);
  }
}
