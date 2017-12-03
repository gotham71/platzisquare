import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; /* Sirve para map, pero No me hizo falta... */
@Injectable()

export class LugaresService {
  API_ENDPOINT = 'https://platzisquare-1510516293883.firebaseio.com';
  constructor(private afDB: AngularFireDatabase, private http: Http) {}
  public getLugares() {
    return this.http.get(this.API_ENDPOINT + '/.json').map((resultado) => {
      const data = resultado.json().lugares;
      return data;
    });
    // return this.afDB.list('/lugares/');
  }

  public buscarLugar(id) {
    return this.afDB.object('lugares/' + id);
    // return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
  }

  public guardarLugar(lugar) {
    const headers = new Headers({'Content-type': 'aplication/json'});
    return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers: headers});
    // this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
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
