import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; /* Sirve para map, pero No me hizo falta... */
@Injectable()

export class LugaresService {
  API_ENDPOINT = 'https://platzisquare-1510516293883.firebaseio.com';
  constructor(private afDB: AngularFireDatabase, private http: Http) {}
  public getLugares() {
    return this.afDB.list('lugares').valueChanges();
  }

  public buscarLugar(id) {
    console.log('buscarlugar id: ' + id);
    return this.afDB.object('lugares/' + id);
  }

  public guardarLugar(lugar) {
    // const headers = new Headers({'Content-type': 'aplication/json'});
    // return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers: headers});
     this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public editarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    return this.http.get('https://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }

  public getLugar(id) {
    return this.afDB.object('lugares/' + id);
  }

  public getLugaresPayedRandom() {
    let array: any = null;
    array = this.afDB.list('lugares').valueChanges();
    // alert(this.afDB.list('lugares'));
    // let currentIndex = array.length, temporaryValue, randomIndex ;

    // // While there remain elements to shuffle...
    // while (0 !== currentIndex) {

    //   // Pick a remaining element...
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex -= 1;

    //   // And swap it with the current element.
    //   temporaryValue = array[currentIndex];
    //   array[currentIndex] = array[randomIndex];
    //   array[randomIndex] = temporaryValue;
    // }

    return array;
  }
}
