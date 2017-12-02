import { Injectable } from '@angular/core';
import { AngularFireDatabase } from'angularfire2/database';
import { Http } from '@angular/http';

@Injectable()

export class LugaresService{
  lugares:any = [
    {id: 1, plan: 'gratuito', cercania:1, distancia: 1, active: true, nombre:'Floristeria Gardenia', descripcion: 'Descripción de este negocio. Más adelante tendremos más información.'},
    {id: 2, plan: 'gratuito', cercania:1, distancia: 1.8, active: false, nombre:'McDonalds', descripcion: 'Descripción de este negocio. Más adelante tendremos más información.'},
    {id: 3, plan: 'pagado', cercania:2, distancia: 5, active: true, nombre:'Veterinaria Mascotas', descripcion: 'Descripción de este negocio. Más adelante tendremos más información.'},
    {id: 4, plan: 'gratuito', cercania:3, distancia: 10, active: false, nombre:'Restaurante El Chino', descripcion: 'Descripción de este negocio. Más adelante tendremos más información.'},
    {id: 5, plan: 'pagado', cercania:3, distancia: 35, active: true, nombre:'Hotel El Pilar', descripcion: 'Descripción de este negocio. Más adelante tendremos más información.'},
    {id: 6, plan: 'gratuito', cercania:3, distancia: 120, active: true, nombre:'Calzados Alfonso', descripcion: 'Descripción de este negocio. Más adelante tendremos más información.'},
  ];
  constructor(private afDB: AngularFireDatabase, private http: Http){}
  public getLugares(){
  	return this.afDB.list('lugares/');
  }

  public buscarLugar(id){
    return this.afDB.object('lugares/' + id);
    //return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
  }

  public guardarLugar(lugar){
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public editarLugar(lugar){
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion){
    //maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  public getLugar(id){
    return this.afDB.object('lugares/'+id);
  }
}